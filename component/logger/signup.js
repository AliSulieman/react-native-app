import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Dimensions } from 'react-native';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
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

export default function signup() {

    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [error, setError] = useState({})

    const [err, setErr] = useState('')


    const validation = () => {
        let isError = false;
        let sit = {}
        if (fullname.length < 4) {
            //console.log(fullname, "here", fullname.length)
            isError = true
            sit.fullnameErr = 'Must be more than 4 letter'
        }
        if (username.indexOf("@") === -1) {
            isError = true
            sit.userErr = 'Not A valid email'
        }
        if (password.length < 6) {
            isError = true
            sit.passErr = 'Password Must Be more than 6 characters'
        }
        if (true) {
            //console.log("work here")
            setError(sit)
        }
        return isError
    }
    const handleLoginErrorView = () => {
        if (err != '') {
            return <Paper style={{
                marginBottom: 20,
                fontSize: 20,
                backgroundColor: 'gray',
                color: 'white',


            }} elevation={24} varient="outlined" square >{err}</Paper>
        }
    }

    const submit = () => {
        const errCheck = validation()
        //console.log(error)
        if (!errCheck) {
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
                    setErr(rejected)
                })

        }
    }
    const handle = e => {
        setFullname(e.target.value)

    }

    const handleEmail = e => {
        setUsername(e.target.value)
    }

    const handlePass = e => {
        setPassword(e.target.value)
    }

    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require("../../images/guy.png")} />
            {handleLoginErrorView()}

            <TextField style={{
                height: 40,
                width: 250,
                marginRight: 20,
                borderWidth: 1,
                borderColor: 'salmon',
                marginBottom: 50,
                textAlign: 'center',
                color: 'red'
            }}
                required={true}

                error={error.fullnameErr}
                helperText={error.fullnameErr ? error.fullnameErr : ''}
                placeholder='Chris Williams'
                label='Fullname'
                id="outlined-basic"
                variant="outlined"
                value={fullname}
                onChange={handle}
                InputLabelProps={{
                    shrink: true
                }}
            >
            </TextField>

            <TextField style={{
                color: '#83bec4',
                height: 40,
                width: 250,
                borderWidth: 1,
                borderColor: 'salmon',
                marginBottom: 45,
                textAlign: 'center',
                marginRight: 20
            }}
                InputLabelProps={{
                    shrink: true
                }}
                error={error.userErr}
                helperText={error.userErr ? error.userErr : ''}
                placeholder='Chris@domain.com'

                label='Email' id="outlined-basic" variant="outlined" value={username} onChange={handleEmail}>
            </TextField>



            <TextField style={{
                height: 40,
                width: 250,
                borderWidth: 1,
                borderColor: 'salmon',
                marginBottom: 30,
                textAlign: 'center',
                marginRight: 20,
                marginTop: 10

            }}
                InputLabelProps={{
                    shrink: true
                }}
                error={error.passErr}
                helperText={error.passErr ? error.passErr : ''}
                label='Password'
                type='password'

                placeholder='password'
                id="outlined-basic"
                variant="outlined" value={password} onChange={handlePass}>
            </TextField>



            <View style={{ flex: 2, flexDirection: 'row' }}>
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
                    onClick={() => history.push("/")}>

                    <Text style={{
                        fontFamily: 'Baskerville',
                        fontSize: 20,
                        paddingLeft: 5,
                        paddingTop: 9,
                        marginBottom: 10

                    }}>
                        Back
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
                        Submit
                        </Text>
                </Button>

            </View>

        </View >
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        flexDirection: "colum",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
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