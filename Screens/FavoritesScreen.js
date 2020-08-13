import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderTitle } from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/HeaderButton'

const FavoriteScreen = (props) => {


    return (
        <View style={styles.screen}>
            <Text>Favorite Breed Screen</Text>
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

export default FavoriteScreen;