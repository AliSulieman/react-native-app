import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

import { useHistory } from 'react-router-dom';


export default function login() {
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //setting a state for the snack bar 
    const [snackbarOpen, setsnackBarOpen] = useState(false)
    const [snackBarMes, setsnackBarMes] = useState('')
    // const [isIncorrectUser, setIsIncorrectUser] = useState(false)


    const close = () => {
        setsnackBarOpen(false)
    }
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
            if (response.status === 400) {
                throw ("Incorrect Password")
            }
            if (response.status === 404) {
                throw ("User Doesnt Exist")
            }
        }).then((res => {
            history.push('/homepage')


        })).catch(rejected => {
            setsnackBarOpen(true)
            setsnackBarMes(rejected)
        })

    }
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require("../../images/logo.png")} />

            <TextInput style={styles.userinput} placeholder="Email" value={username} onChangeText={(Value) => setUsername(Value)} >

            </TextInput>

            <TextInput style={styles.userinputtwo} secureTextEntry={true} placeholder="Password" value={password} onChangeText={(Value) => setPassword(Value)} >

            </TextInput>
            <View style={{ flex: 2, flexDirection: 'row', marginTop: 30 }}>

                <TouchableOpacity style={styles.op} onPress={submit} disabled={username.trim() === "" || password.trim() === ""} >
                    <Text style={styles.textsty}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ops} onPress={() => history.push("/signup")}>
                    <Text style={styles.textst}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Snackbar
                //how to display
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={close}
                message={snackBarMes}

                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color='inherit'
                        onClick={close}
                    >
                        X
                    </IconButton>
                ]}
            />


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
        marginBottom: 40,
        height: 300,
        width: 128,
    },
    userinput: {
        height: 40,
        width: 250,
        borderRadius: 5,
        backgroundColor: '#83bec4',
        color: 'white',
        marginTop: 1,
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


