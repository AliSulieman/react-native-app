import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function login() {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const [error, setError] = useState('')


    const handleEmail = e => {
        setUsername(e.target.value)
    }

    const handlePass = e => {
        setPassword(e.target.value)
    }

    const submit = () => {
        if (username === '' & password === '') {
            setError('Provid an Email and Password')
            return
        }
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
            if (response.status === 200) {
                return
            }
            else if (response.status === 400 || response.status === 404) {
                throw ("Invalid Username or Password")
            } else {
                throw ('Uh oh... Something went wrong. Contact support!')
            }
        }).then((res => {
            history.push('/homepage')
        })).catch(rejectionErr => setError(rejectionErr))
    }

    const handleLoginErrorView = () => {
        if (error != '') {
            return <Paper style={{
                marginBottom: 20,
                fontSize: 15,
                backgroundColor: 'salmon'
            }} elevation={3} varient="outlined" square >{error}</Paper>
        }

    }
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require("../../images/logo.png")} />
            {handleLoginErrorView()}
            <TextField style={{
                height: 40,
                width: 250,
                borderRadius: 5,
                color: 'white',
                marginTop: 1,
                textAlign: 'center',
                alignSelf: 'center',
                marginBottom: 20
            }}
                error={error}
                // helperText={error ? error : ''}
                placeholder='Email@domain.com'
                label='Email'
                id="outlined-basic"
                variant="outlined"
                value={username}
                onChange={handleEmail}
                InputLabelProps={{
                    shrink: true
                }}
            >
            </TextField>

            <TextField style={{
                height: 40,
                width: 250,
                borderRadius: 5,

                color: 'white',
                marginTop: 30,
                textAlign: 'center',
                alignSelf: 'center',
            }}
                label='Password'
                type='password'
                error={error}
                // helperText={errorpass ? errorpass : ''}
                placeholder='Password'
                label='Password'
                id="outlined-basic"
                variant="outlined"
                value={password}
                onChange={handlePass}
                InputLabelProps={{
                    shrink: true
                }}
            >
            </TextField>
            <View style={{ flex: 2, flexDirection: 'row', marginTop: 30 }}>
                <Button style={{

                    height: 40,
                    width: 150,
                    marginTop: 30,
                    marginRight: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'salmon',
                    marginTop: 30
                }} classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label,
                }}
                    onClick={() => history.push("/signup")}>

                    <Text style={{
                        fontFamily: 'Baskerville',
                        fontSize: 20,
                        paddingLeft: 5,
                        paddingTop: 9,
                        marginBottom: 10

                    }}>
                        Sign Up
    </Text>
                </Button>

                <Button style={{
                    height: 40,
                    width: 150,
                    marginTop: 30,
                    marginRight: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'salmon',
                }} classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
                    variant="contained" color="salmon"
                    onClick={submit}>
                    <Text style={{
                        fontFamily: 'Baskerville',
                        fontSize: 20,
                        paddingLeft: 5,
                        paddingTop: 9,
                        marginBottom: 10

                    }}>
                        Login
    </Text>
                </Button>
            </View>


        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
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


