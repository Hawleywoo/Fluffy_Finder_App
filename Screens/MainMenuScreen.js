import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native'
import { headerTitle, headerRight } from 'react-navigation-stack'
import MyCarousel from '../Components/MyCarousel'
import  Colors from '../Constants/Colors'

const MainMenuScreen = (props) => {

    const [breedsData, setBreedData] = useState([])
    const [filteredBreed, setfilteredBreed] = useState([])

    useEffect( () => 
        {
            fetch('http://localhost:3000/breeds')
                .then((response) => response.json())
                .then(result => {
                    setBreedData(result)
                    let filteredDogs = result.filter(item => {
                        return(
                            item.id == Math.floor(Math.random() * 176)
                                || item.id == Math.floor(Math.random() * 176)
                                || item.id == Math.floor(Math.random() * 176)
                                || item.id == Math.floor(Math.random() * 176)
                                || item.id == Math.floor(Math.random() * 176)
                                || item.id == Math.floor(Math.random() * 176)
                        )
                    })
                    setfilteredBreed(filteredDogs) 
                    console.log(filteredBreed)})
        }, [])

    return (
        <View style={styles.screen}>
            <Text style={styles.header} >Fluffy Finder</Text>
            <MyCarousel style={styles.carousel} dogs={filteredBreed} />
            <Text style={styles.header}>Main Menu</Text>
            <Button title="List of All Breeds" onPress={() => {
                props.navigation.navigate({
                    routeName: 'Breeds',
                    params: {
                        breedsData: breedsData
                    }
                })
            }}
            />
            <Button title="Breed Identifier" onPress={() => { props.navigation.navigate('BreedIdentifier') }} />
            <Button title="Favorite Breeds" onPress={() => { props.navigation.navigate('BreedIdentifier') }} />
        </View>
    )
}



MainMenuScreen.navigationOptions = {
    headerTitle: 'Welcome!',
    headerRight: () => { <Text>please work</Text> },
    headerStyle: {
        backgroundColor: 'purple'
    },
    headerTintColor: 'white'
}


const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.blue,
        flex: 1,
        alignItems: 'center',
        paddingBottom: 450,
    },
    header: {
        paddingTop: 35,
        fontSize: 25,
        color: Colors.tealUsed,
        fontWeight: "900",
    },
    coursel: {
    }
})

export default MainMenuScreen;