import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default function Homepage() {
    return (
        <View style={{
            backgroundColor: 'salmon',
            flexDirection: "colum",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 1000
        }}>
            <Text style={{
                justifyContent: 'center'
            }}>
                WELCOME TO MY WEBSITE
            </Text>
        </View>
    )
}