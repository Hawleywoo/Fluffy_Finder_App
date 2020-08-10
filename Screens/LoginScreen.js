import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput } from 'react-native'


const LoginScreen = ( ) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View>
            <Text>Fluffy Finder</Text>
            <TextInput />
            <TextInput placeholder="Password" value={password}/>
        </View>
    )
}

const style = StyleSheet.create({

})


export default LoginScreen;