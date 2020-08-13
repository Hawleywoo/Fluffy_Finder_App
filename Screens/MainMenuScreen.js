import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MainMenuScreen = (props) => {


    const [ breedsData, setBreedsData ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/breeds')
        .then((response) => response.json())
        .then(result => setBreedsData(result))
    }, [])


    return (
        <View style={styles.screen}>
            <Text>Main Menu</Text>
            <Button title="Breed Screen" onPress={() => { 
                props.navigation.navigate({
                    routeName: 'Breeds', 
                    params: { 
                        breedsData: breedsData 
                        }
                    })
                }}
            />
            <Button title="Breed Identifier" onPress={() => { props.navigation.navigate('BreedIdentifier') }} />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MainMenuScreen;