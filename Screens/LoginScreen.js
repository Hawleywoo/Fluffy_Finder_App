import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput } from 'react-native'
import Colors from '../Constants/Colors'

const LoginScreen = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Fluffy Finder</Text>
            <TextInput style={styles.input} placeholder="Username..." value={username}/>
            <TextInput style={styles.input} placeholder="Password..." value={password}/>
            <Button title="continue" onPress={() => {props.navigation.replace('BreedsTab')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        paddingVertical: 10,
        marginVertical: 10,
        borderBottomWidth: 2,
        borderColor: Colors.tealUsed,
        width: '45%',
    },
    header: {
        fontSize: 20,
        marginVertical: 20,
    }

})


export default LoginScreen;