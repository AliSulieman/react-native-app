import React, { Component, useState } from 'react';

import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function login() {

    const history = useHistory();
    return (
        <View style={{
            backgroundColor: "#465153", height: 1000,

        }}>
            {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                <Card style={{
                    maxWidth: 345,
                    height: 400,
                    marginLeft: 100

                }}>

                    <CardMedia style={{
                        height: 50,
                        paddingTop: '56.25%'
                    }}
                        image={require("../../images/er.png")}
                    ></CardMedia>
                    <CardContent>
                        <Typography>Photo </Typography>
                        <Typography>
                            Explore Our Photo Tool To Find Your Favorite Photos
                    </Typography>
                        <CardActions>
                            <Button onClick={() => history.push("/homepage")} style={{ marginLeft: 90 }} color="primary">
                                Try It Now
                    </Button>
                        </CardActions>
                    </CardContent>
                </Card> */}
            {/* </View> */}
            <View style={{ flex: 2, flexDirection: 'row' }}>
                <Card style={{
                    maxWidth: 345,
                    height: 400,
                    marginLeft: 800,
                    marginTop: 180,

                }}>

                    <CardMedia style={{
                        height: 50,
                        paddingTop: '56.25%'
                    }}
                        image={require("../../images/er.png")}
                    ></CardMedia>
                    <CardContent>
                        <Typography>Photo </Typography>
                        <Typography>
                            Explore Our Photo Tool To Find Your Favorite Photos
                    </Typography>
                        <CardActions>
                            <Button onClick={() => history.push("/homepage")} style={{ marginLeft: 90 }} color="primary">
                                Try It Now
                    </Button>
                        </CardActions>
                    </CardContent>
                </Card>

            </View>

        </View>
    )


}