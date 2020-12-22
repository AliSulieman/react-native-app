import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-dom';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
                if (response.status === 401) {
                    throw ("Email Is Not Valid")
                }
            })
            .then((res => {
                history.push('/homepage')


            })).catch(rejected => {

                setsnackBarOpen(true)
            })

    }
    const handle = e => {
        setFullname(e.target.fullname)
    }

    const handleEmail = e => {
        setUsername(e.target.username)
    }

    const handlePass = e => {
        setPassword(e.target.password)
    }

    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require("../../images/guy.png")} />



            <TextField style={{
                height: 40,
                width: 250,
                marginRight: 20,
                borderWidth: 1,
                borderColor: 'salmon',
                marginBottom: 30,
                textAlign: 'center',
                color: 'red'

            }}
                label='Fullname' id="outlined-basic" variant="outlined" value={fullname} onChange={handle}
            >
            </TextField>


            <TextField style={{
                color: '#83bec4',
                height: 40,
                width: 250,
                borderWidth: 1,
                borderColor: 'salmon',
                marginBottom: 30,
                textAlign: 'center',
                marginRight: 20

            }}
                label='Email' id="outlined-basic" variant="outlined" value={username} onChange={handleEmail}>
            </TextField>



            <TextField style={{

                height: 40,
                width: 250,
                borderWidth: 1,
                borderColor: 'salmon',
                marginBottom: 30,
                textAlign: 'center',
                marginRight: 20

            }}
                label='Password' id="outlined-basic" variant="outlined" value={password} onChange={handlePass}>
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
                }} classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label,
                }} onClick={() => history.push("/")}>
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
        </View >
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