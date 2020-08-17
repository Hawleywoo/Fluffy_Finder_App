import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const BreedItem = (props) => {
    return (
        <View style={styles.breedContainer}>
            <Text style={styles.name}>{props.breedName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    breedContainer: {
        height: 50,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10, 
    },
    name: {
        fontSize: 25,
        textDecorationColor: 'black'
    }
})

export default BreedItem;