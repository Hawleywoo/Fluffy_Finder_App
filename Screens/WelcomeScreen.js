import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../Constants/Colors'

const WelcomeScreen = (props) => {


    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Image source={require('../Logo1.png')} style={styles.logo} />
                <Text style={styles.headerText}> Fluffy Finder</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer1} onPress={() => props.navigation.replace('SignUp')}>
                <Text style={styles.button} >Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer2} onPress={() => props.navigation.replace('Login')}>
                <Text style={styles.button} >Login</Text>
            </TouchableOpacity>
        </View>
    )
}


// '#5fb49c' original
// #61bdaa
// rgb(97, 189, 170)
const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'hsl(168, 41%, 56%)',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    buttonContainer1: {
        borderColor: '#414288',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 15,
        width: 100,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
    },
    buttonContainer2: {
        borderColor: '#682d63',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 15,
        width: 100,
        alignItems: 'center',
    },
    button: {
        // padding: ,
        fontSize: 15,
        borderRadius: 50,
        marginVertical: 8,
        color: 'white',
        // backgroundColor: 'white'
    },
    headerText: {
        color: 'white',
        fontSize: 35,
        paddingBottom: 5,
    },
    logo: {
        height: 50,
        width: 60
    },
    header: {
        flexDirection: 'row',
        // paddingVertical: 10,
        marginBottom: 25,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'hsla(0, 0%, 100%, .5)',
    }
})

export default WelcomeScreen;