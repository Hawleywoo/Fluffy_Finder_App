import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'


const SignUpScreen = (props) => {


    return (
        <View>
            <TextInput id='email' label='Email' keyboardType="email-address" errorMessage onValueChange />
            <Button title="continue" onPress={() => {props.navigation.replace('BreedsTab')}} />
        </View>
    )
}

export default SignUpScreen;