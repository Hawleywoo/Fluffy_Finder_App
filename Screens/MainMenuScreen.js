import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Dimensions, ActivityIndicator } from 'react-native'
import { headerTitle, headerRight } from 'react-navigation-stack'
import MyCarousel from '../Components/MyCarousel'
import Colors from '../Constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MainMenuScreen = (props) => {
    
    const user = props.navigation.getParam('user')
    const [breedsData, setBreedData] = useState([])
    const [filteredBreed, setfilteredBreed] = useState([])
    const [isCarouselReady, setIsCarouselReady] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/breeds')
            .then((response) => response.json())
            .then(result => {
                if(result.errors) {
                    let 
                } else {
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
                    return result
                }
            })
            .then(setIsCarouselReady(true))
            .then(result => setBreedData(result))
    }, [])

    return (
        <View style={styles.screen}>
            <Text style={styles.header} >Welcome {user ? user.username :  'to Fluffy Finder' }!</Text>
            {isCarouselReady
                ? <MyCarousel style={styles.carousel} dogs={filteredBreed} />
                : <ActivityIndicator size='large' />
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
                    onPress={() => {
                        props.navigation.navigate({
                            routeName: 'BreedIdentifier',
                            params: {
                                breedsData: breedsData
                            },
                        })
                    }}
                >
                    <Text style={styles.menuText}>Breed Identifier</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItemContainer}
                    onPress={() => { props.navigation.navigate('BreedIdentifier') }}>
                    <Text style={styles.menuText} >Favorite Breeds </Text>
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
        marginTop: 25,
        paddingHorizontal: 10,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: 'hsla(0, 0%, 100%, .3)',
        marginBottom: 5,
        borderBottomLeftRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
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
        fontSize: 30,
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