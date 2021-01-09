import { Button, TextField } from '@material-ui/core';
import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';




export default function weather() {
    const getWeather = () => {
        // const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=neworleans&appid=${key}`)
        // const data = await api_call.json()
        // console.log(data)
        const key = "29fe653358c90cde3bcdd94739575056"

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=louisiana&appid=${key}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify()
        })
            .then((response) => {
                console.log(response)
            })
            .then((response) => {
                console.log(response)
            })
            .catch(rejected => {
                console.log(rejected)
            })
    }

    return (
        <View>
            <Text>Find the weather and condition of your favorite country</Text>
            <TextField style={{
                height: 40,
                width: 250,
                borderRadius: 5,
                color: 'white',
                marginTop: 1,
                textAlign: 'center',
                alignSelf: 'center',
                marginBottom: 20
            }} placeholder='state' ></TextField>

            <TextField style={{
                height: 40,
                width: 250,
                borderRadius: 5,
                color: 'white',
                marginTop: 30,
                textAlign: 'center',
                alignSelf: 'center',
            }}></TextField>

            <Button style={{
                backgroundColor: 'salmon',
                height: 40,
                width: 150,
                marginTop: 30,
                marginRight: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'salmon',
                marginTop: 30
            }}
                onClick={getWeather}
            ></Button>
        </View>
    )
}