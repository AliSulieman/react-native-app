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

                <TouchableOpacity style={styles.op}>
                    <Text style={styles.textsty}>Login</Text>
                </TouchableOpacity>

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
        alignItems: "center"
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    op: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 250,
        marginTop: 30,
    },
    logo: {
        height: 128,
        width: 128,
    },
    userinput: {
        height: 40,
        width: 250,
        borderRadius: 5,
        backgroundColor: '#83bec4',
        color: 'white',
        marginTop: 30,
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
        paddingLeft: 100,
        paddingTop: 10,
        fontFamily: 'Baskerville',
        fontSize: 20,
    }

});
