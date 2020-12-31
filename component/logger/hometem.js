import React, { Component, useState } from 'react';

import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import TextField from '@material-ui/core/TextField';


export default function login() {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            {/* <Image source={require('../../images/ss.jpg')} style={{
                marginBottom: 40,
                height: 900,
                width: 800
            }}>

            </Image>

            <TextField style={{
                height: 40,
                width: 250,
                borderRadius: 5,
                color: 'black',

                // textAlign: 'center',
                // alignSelf: 'center',
                marginTop: 350,
                marginLeft: 80
                // marginLeft: 900
            }}
                // error={error}
                // helperText={error ? error : ''}
                placeholder='Email@domain.com'
                label='Email'
                id="outlined-basic"
                variant="outlined"
                // value={username}
                // onChange={handleEmail}
                InputLabelProps={{
                    shrink: true
                }}
            >
            </TextField>
            <TextField style={{
                height: 40,
                width: 250,
                borderRadius: 5,
                color: 'black',

                // textAlign: 'center',
                // alignSelf: 'center',
                marginTop: 500,

                // marginLeft: 900
            }}
                label='Password'
                type='password'
                // error={errorpass}
                // helperText={errorpass ? errorpass : ''}
                placeholder='Password'
                label='Password'
                id="outlined-basic"
                variant="outlined"
                // value={password}
                // onChange={handlePass}
                InputLabelProps={{
                    shrink: true
                }}
            >
            </TextField> */}
        </View>
    )


}