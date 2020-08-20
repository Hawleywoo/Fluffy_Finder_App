import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, ScrollView, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import Colors from '../Constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { isLoading } from 'expo-font'

const LoginScreen = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [alerts, setAlerts] = useState([])
    const [toggleLogin, setToggleLogin] = useState(false)
    const [user, setUser] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleLoginSubmit = () => {
        fetch('http://localhost:3000/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response => response.json())
            .then(result => {
                if (result.errors) {
                    setAlerts(result.errors)
                } else {
                    setUser(result.user)
                    setAlerts(["Successful Login!"])
                }
                return result.user
            })
            .then((user) => {
                
                }) 
            
    }

    const handleSignUpSubmit = () => {
    
        fetch('http://localhost:3000/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            })
            .then(response => response.json())
            .then(result => {
                if(result.errors){
                    setAlerts(result.errors)
                } else {
                    setUser(result.user)
                    setAlerts(["Successful Sign Up!"])
                }
            })
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
                    {toggleLogin
                        ? null
                        : <TextInput
                            blurOnSubmit
                            style={styles.input}
                            placeholder="Email..."
                            keyboardType='default'
                            autoCapitalize='none'
                            value={email}
                            autoCorrect={false}
                            onChangeText={(email) => setEmail(email)} 
                    /> }
                    {isLoading
                        ? <ActivityIndicator size='small' />
                        : <Button
                            title={toggleLogin ? "Login" : "Sign Up"}
                            onPress={toggleLogin
                                ? () => {
                                    setIsLoading(true)
                                    handleLoginSubmit
                                    setIsLoading(false)
                                    props.navigation.replace({
                                        routeName: 'Fluffy Finder',
                                        params: {
                                            user: user
                                        }
                                    })
                                }
                                : () => {
                                    handleSignUpSubmit
                                }
                            }
                        />
                    }
                    <TouchableOpacity onPress={() => { setToggleLogin(!toggleLogin) }}>
                        <Text>{toggleLogin ? 'Need to Sign Up?' : 'Switch to Login'}</Text>
                    </TouchableOpacity>
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
        maxHeight: 500,
        maxWidth: 300,
    }

})


export default LoginScreen;