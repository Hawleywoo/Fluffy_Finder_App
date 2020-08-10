import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const BreedsScreen = (props) => {

    return (
        <View style={styles.screen}>
            <Text>Breeds Screen</Text>
            <Button title="Detail Screen" onPress={() => {props.navigation.navigate('BreedDetail')}} />
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

export default BreedsScreen; 