import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Colors from '../Constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/HeaderButton'
import BreedItem from '../Components/BreedItem'

const BreedsScreen = (props) => {

    const breedData = props.navigation.getParam('breedsData')

    const RenderDogBreed = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.breedItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'BreedDetail',
                        params: {
                            breed: itemData.item
                        }
                    })
                }}
            >
                <View style={styles.breedContainer}>
                    <Text style={styles.name}>{itemData.item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    // Inside the navigate function pass a params object that you can pass data

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id.toString()}
                data={breedData}
                renderItem={RenderDogBreed}
            />
        </View>
    )
}

BreedsScreen.navigationOptions = (navData) => {

    return {
        headerTitle: () => (<Text>something</Text>),
        headerRight: () => (
            <Button
                onPress={navigation.getParam('increaseCount')}
                title="+1"
                color="black"
            />
        ),
    };
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.purple
    },
    breedItem: {
        paddingVertical: 50,
        height: 100,
        width: '100%',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        alignItems: 'center'
    },
    breedContainer: {
        height: 50,
        width: '90%',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10, 
        backgroundColor: 'hsla(305, 10%, 29%, .7)',
        

    },
    name: {
        fontSize: 25,
        color: Colors.lightYellow,
        paddingVertical: 10,
        paddingHorizontal: 50,
    }
})

export default BreedsScreen;

// Use navigation.replace for login to not go back.


// headerTitle: 'All Breeds',
//         headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#fff"
//             />
//           ),
//             // <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//             //     <Item title="Menu" iconName='ios-menu' onPress={() => {
//             //         navData.navigation.toggleDrawer()
//             //     }} />
//             // </HeaderButtons>

//         headerStyle: {
//             backgroundColor: Colors.purple
//         },
//         headerTintColor: Colors.lightYellow
//     }