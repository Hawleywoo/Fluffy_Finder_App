import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native'
import * as tf from '@tensorflow/tfjs'
import { fetch } from '@tensorflow/tfjs-react-native'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as jpeg from 'jpeg-js'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'


class BreedIdentifierScreen extends React.Component {
    state = {
        isTfReady: false,
        isModelReady: false,
        predictions: null,
        image: null,
        breedData: null
    }
    
    async componentDidMount() {
        await tf.ready()
        this.setState({
            isTfReady: true
        })
        // this.setState({breedData: this.props.navigation.navigation.getParams('breedsData')})
        this.model = await mobilenet.load()
        this.setState({ isModelReady: true })
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA)
            if (status !== 'granted') {
                alert('Sorry, we need camera roll/camera permissions to make this work!')
            }
        }
    }

    imageToTensor(rawImageData) {
        const TO_UINT8ARRAY = true
        const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY)
        const buffer = new Uint8Array(width * height * 3)
        let offset = 0 // offset into original data
        for (let i = 0; i < buffer.length; i += 3) {
            buffer[i] = data[offset]
            buffer[i + 1] = data[offset + 1]
            buffer[i + 2] = data[offset + 2]

            offset += 4
        }

        return tf.tensor3d(buffer, [height, width, 3])
    }

    classifyImage = async () => {
        try {
            const imageAssetPath = Image.resolveAssetSource(this.state.image)
            const response = await fetch(imageAssetPath.uri, {}, { isBinary: true })
            const rawImageData = await response.arrayBuffer()
            const imageTensor = this.imageToTensor(rawImageData)
            const predictions = await this.model.classify(imageTensor)
            this.setState({ predictions })
            console.log(predictions)
        } catch (error) {
            console.log(error)
        }
    }

    selectImage = async () => {
        try {
            let response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3]
            })

            if (!response.cancelled) {
                const source = { uri: response.uri }
                this.setState({ image: source })
                this.classifyImage()
            }
        } catch (error) {
            console.log(error)
        }
    }

    renderPrediction = prediction => {
        return (
            <Text key={prediction.className} style={styles.predictionText}>
                {prediction.className}
            </Text>
        )
    }

    useCameraImage = async () => {
        try {
            let response = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3]
            })

            if (!response.cancelled) {
                const source = { uri: response.uri }
                this.setState({ image: source })
                this.classifyImage()
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    findBreed = this.state.predictions 
        ? this.state.breedData.find(breed => breed.name == predictions[0]["className"].split(',')[0])
        : null;

    render() {
        const { isTfReady, isModelReady, predictions, image } = this.state

        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <View style={styles.loadingContainer}>
                    <Text style={styles.readyText}>
                        TFJS ready? {isTfReady ? <Text>✅</Text> : ''}
                    </Text>

                    <View style={styles.loadingModelContainer}>
                        <Text style={styles.readyText}>Model ready? </Text>
                        {isModelReady
                            ? (<Text style={styles.text}>✅</Text>)
                            : (<ActivityIndicator size='small' />)}
                    </View>
                </View>
                <View >
                    <TouchableOpacity style={styles.imageWrapper} onPress={() => this.setState({ image: null, predictions: null })}>
                        {image
                            ? <Image source={image} style={styles.imageContainer} />

                            : <View style={styles.optionContainer} >
                                <TouchableOpacity
                                    onPress={isModelReady ? this.useCameraImage : undefined}>
                                    {isModelReady && !image && (
                                        <Text style={styles.transparentText}>
                                            Tap to open camera
                                        </Text>
                                    )}
                                </TouchableOpacity>
                                <TouchableOpacity
                                    // style={styles.imageWrapper}
                                    onPress={isModelReady ? this.selectImage : undefined}>

                                    {isModelReady && !image && (
                                        <Text style={styles.transparentText}>
                                            Tap to choose image
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.predictionWrapper}>
                    {isModelReady && image && (
                        <View>
                            <Text style={styles.transparentText}>Tap Image To Identify Another Dog...</Text>
                            <Text style={{ ...styles.text, ...styles.textHeader }}>
                                Predictions: {predictions ? '' : ' Predicting...'}
                            </Text>
                        </View>
                    )}
                    {isModelReady &&
                        predictions &&
                        (
                            <View>
                                <View>
                                    {predictions.map(p => this.renderPrediction(p))}
                                </View>
                                {/* <TouchableOpacity 
                                    style={styles.detailLink} 
                                    onPress={() => {
                                        
                                        this.props.navigation.navigate({
                                            routeName: 'BreedDetail',
                                            params: {
                                                breed: this.findBreed
                                            }
                                        })
                                    }}>
                                    <Text>{predictions[0]["className"].split(',')[0]}</Text>
                                </TouchableOpacity> */}
                            </View>
                        )}
                </View>
                <View style={styles.footer}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#414288',
        alignItems: 'center'
    },
    loadingContainer: {
        marginTop: 80,
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        paddingVertical: 7,
    },
    predictionText: {
        color: '#ffffff',
        fontSize: 16,
        paddingHorizontal: 15,
    },
    readyText: {
        color: '#ffffff',
        fontSize: 16,
    },
    textHeader: {
        fontSize: 22,
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        paddingVertical: 5,
    },
    loadingModelContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    imageWrapper: {
        width: 280,
        height: 280,
        padding: 10,
        borderColor: '#682d63',
        borderWidth: 5,
        borderStyle: 'dashed',
        marginTop: 40,
        marginBottom: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 250,
        height: 250,
        position: 'absolute',
        top: 10,
        left: 10,
        bottom: 10,
        right: 10
    },
    predictionWrapper: {
        height: 100,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    transparentText: {
        fontSize: 15,
        color: '#ffffff',
        opacity: 0.7,
        paddingTop: 10,
    },
    footer: {
        marginTop: 40
    },
})


export default BreedIdentifierScreen;