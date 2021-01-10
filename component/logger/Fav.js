import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput, button, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FlatList } from 'react-native-gesture-handler';
import { Image, ListItem } from 'react-native-elements';
import { AppBar, CardActions, Icon, TextField } from '@material-ui/core';

export default function Fav(props) {


    let collection = []
    collection.push(props)
    console.log(collection[0].data)

    return (
        <View>
            <FlatList

                nativeID="amer"
                data={collection[0].data}
                contentContainerStyle={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'salmon',
                    marginTop: 100

                }}
                renderItem={({ item, index }) => {


                    return (
                        <ListItem nativeID="wow" containerStyle={{
                            height: 'fit-content', width: "fit-content", padding: "none",
                            backgroundColor: 'salmon'
                        }}   >
                            <Card style={{ backgroundColor: 'salmon', margin: 10 }}>
                                <CardMedia
                                    image={item} style={{ width: 300, height: 300 }}
                                >
                                </CardMedia>
                                <CardContent>
                                    <CardActions style={{ display: "flex", justifyContent: "center" }}>
                                        {/* <IconButton onClick={() => save(item)} onChange={handleImg} aria-label="add to favorites" style={{ height: 20, width: 25, }} color='white'> */}

                                        {/* <FavoriteIcon style={{ justifyContent: 'center', alignItems: 'center' }} /> */}

                                        {/* </IconButton> */}

                                    </CardActions>
                                </CardContent>

                            </Card>

                        </ListItem>)
                }}
                keyExtractor={
                    (index) => { return index }
                }

            />




        </View>
    )
}