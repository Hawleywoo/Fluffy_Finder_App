import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { HeaderTitle } from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/HeaderButton'
import Colors from '../Constants/Colors'

const BreedDetailScreen = (props) => {

    const breedData = props.navigation.getParam('breed')

    return (
        <View style={styles.screen}>
                <ImageBackground style={styles.image} source={{ uri: breedData.image_url }} resizeMode='contain' alignSelf='stretch' >
                    <Text style={styles.name} >{breedData.name}</Text>
                </ImageBackground>

            <View style={styles.container}>
                <Text style={styles.breedDesc}>Temperament: {breedData.temperament}</Text>
                <Text style={styles.breedDesc} >Weight: {breedData.weight}</Text >
                <Text style={styles.breedDesc} >Height: {breedData.height}</Text>
                <Text style={styles.breedDesc} >Life Span: {breedData.life_span}</Text>
                {breedData.breed_group ? <Text style={styles.breedDesc}>Breed Type: {breedData.breed_group}</Text> : null}
                {breedData.origin ? <Text style={styles.breedDesc} >Breed Origin: {breedData.origin}</Text> : null}

            </View>
        </View>
    )
}


BreedDetailScreen.navigationOptions = (navigationData) => {
    // const dogBreed = navigationData.getParam('Name of key')
    // const selectedBreed = SOMETHING.find(category => category.id == dogBreed)
    return {
        // headerTitle: selectedCategory.name,
        headerTitle: 'hello',
        headerRight: () => {
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favorite'
                    iconName='ios-star'
                    onPress={() => { console.log('hello') }}
                />
            </HeaderButtons>
        }
    }
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.blue
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    name: {
        fontSize: 30,
        backgroundColor: 'hsla(239, 10%, 39%, .1)',
        color: 'white',
        padding: 10,
        paddingTop: 300,
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 10, 
    },
    container: {
        marginBottom: 150,
        backgroundColor: 'hsla(239, 10%, 90%, .3)',
        padding: 10,
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: .4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10, 
        borderRadius: 15,
    },
    breedDesc: {
        paddingVertical: 5,
        fontSize: 18,
    }
})

export default BreedDetailScreen;