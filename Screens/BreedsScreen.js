import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Colors from '../Constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/HeaderButton'

const BreedsScreen = (props) => {

    const breedData = props.navigation.getParam('breedsData')

    const RenderDogBreed = (itemData) => {
        return (
            <TouchableOpacity 
                style={styles.breedItem} 
                onPress={() => { props.navigation.navigate({
                    routeName: 'BreedDetail',
                    params: {
                        breed: itemData.item
                        }
                    }) 
                }}
            >
                <View style={styles.container}>
                    <ImageBackground style={styles.bgImage} source={{ uri: itemData.item.image_url }}  >
                        <View>
                            <Text>{itemData.item.name}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }
    // Inside the navigate function pass a params object that you can pass data

    return (
        <View style={styles.screen}>
            <Text>Breeds Screen</Text>
            <Button title="Breed Detail Screen" onPress={() => { props.navigation.navigate('BreedDetail') }} />
            <FlatList
                data={breedData}
                renderItem={RenderDogBreed}
            />
        </View>
    )
}

BreedsScreen.navigationOptions = (navData) => {

    return {
        headerTitle: 'All Breeds',
        headerLeft: () => {
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer()
                }} />
            </HeaderButtons>
        },
        headerStyle: {
            backgroundColor: Colors.purple
        },
        headerTintColor: Colors.lightYellow
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    breedItem: {
        height: 100,
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },
    container: {
        height: 100,
    }
})

export default BreedsScreen;

// Use navigation.replace for login to not go back.