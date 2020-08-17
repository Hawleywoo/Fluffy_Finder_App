import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
// import { getPermissionsAsync } from 'expo-camera'

const ImageSelector = props => {
    const [ usersImage, setUsersImage ] = useState('')

    const getPermissions =  async () => {
        const result = await  Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA );
        
        if(result.status !== 'granted'){
            Alert.alert('Need Permission', 
            'You need to grant camera permissions to use this app.', 
            [{text: 'Okay'}])
            return false;
        }
        return true;
    }

    const takeImageHandler = async () => {
        const hasPermission = await getPermissions()
        if(!hasPermission){
            return;
        }
        const image = await ImagePicker.launchCameraAsync();
        props.addImage(image)
        setUsersImage(image.uri)
    }

    let pickImageHandler = async () => {
        let permissionResult = await getPermissions()

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if (pickerResult.cancelled === true) {
            return;
        }
        setUsersImage( pickerResult.uri );
    }

    return (

        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                { !usersImage ? <Text>No Image Picked yet</Text>
                : <Image style={styles.image} source={{uri: usersImage}} /> }
            </View>
            <Button title="Take Image" onPress={takeImageHandler} /> 
            <Button title="Pick Image From Camera Roll" onPress={pickImageHandler} /> 
        </View>
    )
}
const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
    },
})

export default ImageSelector;