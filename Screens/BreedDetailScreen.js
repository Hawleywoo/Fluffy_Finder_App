import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BreedDetailScreen = () => {

    return (
        <View style={styles.screen}>
            <Text>Breed Detail Screen</Text>
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

export default BreedDetailScreen;