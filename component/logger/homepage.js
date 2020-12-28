import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { Card, Image, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';



export default function Homepage() {

    const [Search, setSearch] = useState('')
    const [result, setResult] = useState([])

    const filterURLs = (element, index, arr) => {
        arr[index] = element.urls.full
    }

    const submit = () => {
        const key = "zoiVwhEan-E5dkAD4Km_-n2ybWCiytRXyMwKegHc3_0"

        fetch(`https://api.unsplash.com/search/photos/?client_id=${key}&query=${Search}&per_page=12&page=1`, {
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

            <FlatList
                nativeID="amer"
                data={result}
                contentContainerStyle={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",

                }}
                renderItem={({ item, index }) => {
                    return (
                        <ListItem nativeID="wow" containerStyle={{ height: 'fit-content', width: "fit-content", padding: "none", }}   >
                            <Image source={{ uri: item }} containerStyle={{ width: 200, height: 200 }} PlaceholderContent={< ActivityIndicator />} placeholderStyle={{ height: "100%", width: "100%" }} />
                        </ListItem>)
                }}
                keyExtractor={
                    (index) => { return index }
                }
            />

        </View >
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