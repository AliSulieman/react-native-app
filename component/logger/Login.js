import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
//import { Button } from 'react-native-elements'
import { round } from 'react-native-reanimated';
export default class login extends Component {
    render() {
        return (

            <View style={styles.container}>

                <Image style={styles.logo} source={require("../../images/logo.png")} />

                <TextInput style={styles.userinput} placeholder="Email">

                </TextInput>
                <TextInput style={styles.userinputtwo} placeholder="Password">

                </TextInput>
                <View style={{ flex: 2, flexDirection: 'row', marginTop: 30 }}>
                    <TouchableOpacity style={styles.op}>
                        <Text style={styles.textsty}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ops}>
                        <Text style={styles.textst}>Sign Up</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'salmon',
        flexDirection: "colum",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

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
        marginTop: 100,
        height: 128,
        width: 128,
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
