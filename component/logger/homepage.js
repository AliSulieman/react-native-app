import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';





export default function Homepage() {

    const [Search, setSearch] = useState('')
    const [result, setResult] = useState([])

    const submit = () => {
        // const payload = {
        //     email: username,
        //     password: password
        // }

        fetch(`https://api.unsplash.com/photos/?client_id=${key}&query=${Search}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify()
        }).then((res) => res.json())
            .then((response) => {
                setResult([response])
                //console.log(result)
            })
            .catch(rejected => {
                alert(rejected)

            })

    }


    return (
        <View style={styles.container}>

            <TextInput style={styles.text} placeholder="Search For A pic" Value={Search} onChangeText={(Value) => setSearch(Value)}>

            </TextInput>
            <TouchableOpacity style={styles.button} onPress={submit} >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>

            <FlatList
                data={result}>


            </FlatList>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'salmon',
        height: 1000
    },
    text: {
        height: 40,
        width: 250,
        borderRadius: 5,
        backgroundColor: '#83bec4',
        color: 'white',
        marginTop: 50,
        textAlign: 'center',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 150,
        marginTop: 30,
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'salmon',
        marginLeft: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    }
})