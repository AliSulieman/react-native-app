import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ImageBackground, Button } from 'react-native';
import { Card } from 'react-native-elements'
import { round } from 'react-native-reanimated';
export default class login extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.userinput} placeholder="Email">

                </TextInput>
                <TextInput style={styles.userinputtwo} placeholder="Password">

                </TextInput>
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
    button: {
        height: 40,
        width: 250,
        borderRadius: 5,
        backgroundColor: '#83bec4',
        color: 'white',
        marginTop: 30,
        textAlign: 'center',
        alignSelf: 'center',

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

});
