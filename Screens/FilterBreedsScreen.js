import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const FilterBreedsScreen = () => {

    return (
        <View style={styles.screen}>
            <Text>Filter Breeds Screen</Text>
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

export default FilterBreedsScreen;