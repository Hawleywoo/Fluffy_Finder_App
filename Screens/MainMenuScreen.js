import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const MainMenuScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Main Menu</Text>
            <Button title="Breed Screen" onPress={() => {props.navigation.navigate('Breeds')}} />
            <Button title="Breed Screen" />
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