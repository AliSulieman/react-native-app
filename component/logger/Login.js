import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { useHistory } from 'react-router-dom';


export default function login() {
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        const payload = {
            email: username,
            password: password
        }

        fetch('http://localhost:8000/list-user/', {
            method: 'POST',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(payload)
        }).then((response) => {
            if (response.status != 200) {
                throw ("Unauthorized")
            }
        }).then((res => {

            history.push('/homepage')
            return
        })).catch(rejected => {
            alert("user doesnt exist")

        })

    }
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require("../../images/logo.png")} />

            <TextInput style={styles.userinput} placeholder="Email" value={username} onChangeText={(Value) => setUsername(Value)} >

            </TextInput>

            <TextInput style={styles.userinputtwo} placeholder="Password" value={password} onChangeText={(Value) => setPassword(Value)} >

            </TextInput>
            <View style={{ flex: 2, flexDirection: 'row', marginTop: 30 }}>
                <TouchableOpacity style={styles.op} onPress={submit} disabled={username.trim() === "" || password.trim() === ""} >
                    <Text style={styles.textsty}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ops} onPress={() => history.push("/signup")}>
                    <Text style={styles.textst}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

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
    op: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 150,
        marginTop: 30,
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'salmon'

    },
    ops: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 150,
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'salmon'
    },
    logo: {

    },
    userinput: {
        height: 40,
        width: 250,
        borderRadius: 5,
        backgroundColor: '#83bec4',
        color: 'white',
        marginTop: 50,
        textAlign: 'center',
        alignSelf: 'center',
    },
    userinputtwo: {
        height: 40,
        width: 250,
        borderRadius: 5,
        backgroundColor: '#83bec4',
        color: 'white',
        marginTop: 30,
        textAlign: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: 'Baskerville',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textsty: {
        paddingLeft: 50,
        paddingTop: 10,
        fontFamily: 'Baskerville',
        fontSize: 18,
    },
    textst: {
        paddingLeft: 40,
        paddingTop: 10,
        fontFamily: 'Baskerville',
        fontSize: 18,
    }

});


