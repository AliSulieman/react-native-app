import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-dom';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
export default function signup() {
    const history = useHistory();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')

    const [snackbarOpen, setsnackBarOpen] = useState(false)
    const [snackBarMes, setsnackBarMes] = useState('')

    const close = () => {
        setsnackBarOpen(false)
    }
    const submit = () => {
        const payload = {
            email: username,
            password: password,
            fullname: fullname
        }
        fetch('http://localhost:8000/add-user/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (response.status === 400) {
                    throw ("User already exists")
                }
                if (response.status === 405) {
                    throw ("Method Not Allowed")
                }
                if (response.status === 422) {
                    throw ("Password is short, Criteria: 6 or more characters")
                }
            })
            .then((res => {
                history.push('/homepage')

            })).catch(rejected => {
                setsnackBarOpen(true)
                setsnackBarMes(rejected)
            })

    }

    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require("../../images/guy.png")} />

            <TextInput style={styles.input} placeholder="Full Name" Value={fullname} onChangeText={(Value) => setFullname(Value)}>

            </TextInput>

            <TextInput style={styles.textinput} placeholder="Email" Value={username} onChangeText={(Value) => (setUsername(Value))}>

            </TextInput>

            <TextInput style={styles.texttt} secureTextEntry={true} placeholder="Password" Value={password} onChangeText={(Value) => (setPassword(Value))}>

            </TextInput>


            <View style={{ flex: 2, flexDirection: 'row' }}>
                <TouchableOpacity style={styles.opacity} onPress={() => history.push("/")}>
                    <Text style={{
                        fontFamily: 'Baskerville',
                        fontSize: 18,
                        paddingLeft: 50,
                        paddingTop: 9

                    }}>
                        Back
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.opacity} onPress={submit} disabled={username.trim() === "" || fullname.trim() === "" || password.trim() === ""}>
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

            <Snackbar
                //how to display
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={snackbarOpen}
                autoHideDuration={6000}

                message={snackBarMes}
                onClose={close}
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
        marginBottom: 30,
        textAlign: 'center'
    },
    textinput: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: 'salmon',
        marginBottom: 30,
        textAlign: 'center',
        marginRight: 20

    },
    texttt: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: 'salmon',
        marginBottom: 30,
        textAlign: 'center',
        marginRight: 20

    },
    logo: {
        marginBottom: 55,
        height: 300,
        width: 300,
    },

})