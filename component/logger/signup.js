import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-dom';
import { AsyncStorage } from "@react-native-community/async-storage"

export default function signup() {
    const history = useHistory();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')


    const submit = () => {
        const payload = {
            email: username,
            password: password,
            name: fullname
        }
        fetch('http://127.0.0.1:8000/add-user/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)

        }).then((response) => response.json())
            .then((res => {
                console.log(res)
            })).catch(rejected => {
                console.log(rejected);
            })

    }


    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require("../../images/guy.png")} />

            <TextInput style={styles.input} placeholder="Full Name" Value={fullname} onChange={(Value) => (setFullname(Value))}>

            </TextInput>

            <TextInput style={styles.textinput} placeholder="Email" Value={username} onChange={(Value) => (setUsername(Value))}>

            </TextInput>

            <TextInput style={styles.texttt} placeholder="Password" Value={password} onChange={(Value) => (setPassword(Value))}>

            </TextInput>


            <View style={{ flex: 2, flexDirection: 'row' }}>
                <TouchableOpacity style={styles.opacity} onPress={() => history.push("/")}>
                    <Text style={{
                        fontFamily: 'Baskerville',
                        fontSize: 18,
                        paddingLeft: 50,
                        paddingTop: 9

                    }}>
                        Login
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.opacity} onPress={submit} >
                    <Text style={{
                        fontFamily: 'Baskerville',
                        fontSize: 18,
                        paddingLeft: 50,
                        paddingTop: 9,

                    }}>
                        Submit
                        </Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'salmon',
        flexDirection: "colum",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 1000


    },
    opacity: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 150,
        marginTop: 30,
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'salmon',

    },

    input: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 250,
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'salmon',
        marginBottom: 20,
        textAlign: 'center'
    },
    textinput: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: 'salmon',
        marginBottom: 20,
        textAlign: 'center',
        marginRight: 20

    },
    texttt: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: 'salmon',
        marginBottom: 20,
        textAlign: 'center',
        marginRight: 20

    },
    logo: {

        marginBottom: 40,
        height: 128,
        width: 128,
    },

})