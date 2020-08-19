import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import Colors from '../Constants/Colors'

const LoginScreen = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleLoginSubmit = () => {
        console.log('worked')
        fetch('http://localhost:3000/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/josn'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response => response.json())
            .then(result => console.log(result))
    }

    const handleSignUpSubmit = () => {
        fetch('http://localhost:3000/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/josn'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            })
            .then(response => response.json())
            .then(result => console.log(result))
    }

    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={50}
            style={styles.screen}>
            <View style={styles.loginContainer}>
                <ScrollView>
                    <Text style={styles.header}>Fluffy Finder</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Username..." 
                    value={username} 
                    onChangeText={(username) => setUsername(username)} 
                    />
                    <TextInput
                        blurOnSubmit
                        style={styles.input}
                        placeholder="Password..."
                        keyboardType='default'
                        secureTextEntry
                        minLength={6}
                        autoCapitalize='none'
                        value={password}
                        autoCorrect={false}
                        onChangeText={(password) => setPassword(password)} />
                    <Button
                        title="Login"
                        onPress={
                            () => {
                                handleLoginSubmit()
                                props.navigation.replace('BreedsTab')
                            }
                        }
                    />
                    <Button title="Sign Up " onPress={() => { }} />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.blue,
    },
    input: {
        paddingVertical: 10,
        marginVertical: 10,
        borderBottomWidth: 2,
        borderColor: Colors.tealUsed,
        width: '90%',
    },
    header: {
        fontSize: 20,
        marginVertical: 20,
    },
    loginContainer: {
        width: 500,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 20,
        backgroundColor: 'white',
        maxHeight: 300,
        maxWidth: 300,
    }

})


export default LoginScreen;