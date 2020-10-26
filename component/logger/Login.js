import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements'
import { round } from 'react-native-reanimated';
export default class login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={require('../../images/greece.png')}>
                    <Card containerStyle={{
                        width: 300,
                        height: 300,
                        borderColor: 'grey',
                        backgroundColor: 'grey',

                    }
                    }>
                        <Card.Title style={{ color: 'blue' }}>Sign In</Card.Title>
                    </Card>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    logo: {
        height: 128,
        width: 128,
        marginBottom: 80
    },
    userinput: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 40,
        borderColor: 'grey',
        borderWidth: 3,
        width: 190,
        marginBottom: 140
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: 812,
        width: 812
    },
});
