import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderTitle } from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/HeaderButton'

const BreedDetailScreen = (props) => {

    const breedData = props.navigation.getParam('breed')

    return (
        <View style={styles.screen}>
            <Text>{breedData.name}</Text>
            <Text>Temperament: {breedData.temperament}</Text>
            <Text>Weight: {breedData.weight}</Text>
            <Text>Height: {breedData.height}</Text>
            <Text>Life Span: {breedData.life_span}</Text>
            {breedData.breed_group ? <Text>Breed Type: {breedData.breed_group}</Text> : null }
            {breedData.origin ? <Text>Breed Origin: {breedData.origin}</Text> : null }        
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
                        onPress={() => {console.log('hello')}}
                    />
                </HeaderButtons>
            }
    } 
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BreedDetailScreen;