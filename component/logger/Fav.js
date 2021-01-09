import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput, button, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';



export default function Fav(props) {
    console.log(props)

    const listImag = props.map((ll) => <li>{ll}</li>)

    return (

        <View>

            <ui>{listImag}</ui>

        </View>
    )
}