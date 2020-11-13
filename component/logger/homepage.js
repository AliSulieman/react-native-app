import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';



export default function Homepage() {

    const [Search, setSearch] = useState('')
    const [result, setResult] = useState([])

    const filterURLs = (element, index, arr) => {
        arr[index] = element.urls.full
    }

    const submit = () => {
        // const payload = {
        //     email: username,
        //     password: password
        // }
        const key = "zoiVwhEan-E5dkAD4Km_-n2ybWCiytRXyMwKegHc3_0"

        fetch(`https://api.unsplash.com/search/photos/?client_id=${key}&query=${Search}&per_page=10&page=1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify()
        })
            .then((res) => res.json())
            .then((response) => {
                let images = response.results
                images.forEach(filterURLs);
                setResult(images)
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
            <ul>
                {result.map((url) => {
                    return (
                        <li id={url} style={{ listStyleType: 'none' }}>
                            <Image source={{ uri: url }} style={{
                                marginBottom: 40,
                                height: 100,
                                width: 100,
                                marginLeft: 270,
                                marginTop: 40,
                            }} />
                        </li>
                    )
                })}
            </ul>


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