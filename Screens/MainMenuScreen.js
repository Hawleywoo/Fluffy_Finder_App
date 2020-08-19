import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native'
import { headerTitle, headerRight } from 'react-navigation-stack'
import MyCarousel from '../Components/MyCarousel'
import Colors from '../Constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MainMenuScreen = (props) => {

    const [breedsData, setBreedData] = useState([])
    const [filteredBreed, setfilteredBreed] = useState([])
    const [isCarouselReady, setCarouselReady] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/breeds')
            .then((response) => response.json())
            .then(result => {
                let filteredDogs = result.filter(item => {
                    return (
                        item.id == Math.floor(Math.random() * 176)
                        || item.id == Math.floor(Math.random() * 176)
                        || item.id == Math.floor(Math.random() * 176)
                        || item.id == Math.floor(Math.random() * 176)
                        || item.id == Math.floor(Math.random() * 176)
                        || item.id == Math.floor(Math.random() * 176)
                    )
                })
                setfilteredBreed(filteredDogs)
                console.log(result)
                return result
            })
            .then(setIsCarouselReady(true))
            .then( result => setBreedData(result))
        }, [])

    return (
        <View style={styles.screen}>
            <Text style={styles.header} >Fluffy Finder</Text>
            {isCarouselReady 
                ?<MyCarousel style={styles.carousel} dogs={filteredBreed} />
                : <ActivityIndicator size='medium' />
        }
            <Text style={styles.header}>Main Menu</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    style={styles.menuItemContainer}
                    onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Breeds',
                        params: {
                            breedsData: breedsData
                        }
                    })
                }}>
                    <Text style={styles.menuText}>List of Breeds</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menuItemContainer}
                    onPress={() => { props.navigation.navigate('BreedIdentifier') }}>
                    <Text style={styles.menuText}>Breed Identifier</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menuItemContainer}
                    onPress={() => { props.navigation.navigate('BreedIdentifier') }}>
                    <Text style={styles.menuText} >Breed Identifier</Text>
                </TouchableOpacity>

            </View>
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
    menuText: {
        fontSize: 17,
        paddingVertical: 7,
        color: 'white'
    },
    menuItemContainer: {
        paddingTop: 15,
    },
    menuContainer: {

    },
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
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    coursel: {
    }
})

export default MainMenuScreen;