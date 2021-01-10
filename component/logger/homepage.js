import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput, button, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Link } from 'react-router-link'
import { useHistory } from 'react-router-dom';
import { AppBar, CardActions, Icon, TextField } from '@material-ui/core';
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

import Fav from './Fav';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function Homepage() {

    const [Search, setSearch] = useState('')
    const [result, setResult] = useState([])
    const [img, setImag] = useState([])

    const history = useHistory();
    const classes = useStyles();

    const save = (ele) => {
        let currentImages = img
        currentImages.push(ele)
        setImag(currentImages)

    }
    const filterURLs = (element, index, arr) => {
        arr[index] = element.urls.full

    }
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    const handleImg = e => {
        setSearch(e.target.value)
    }


    const submit = () => {
        const key = "zoiVwhEan-E5dkAD4Km_-n2ybWCiytRXyMwKegHc3_0"

        fetch(`https://api.unsplash.com/search/photos/?client_id=${key}&query=${Search}&per_page=24&page=1`, {
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
    const handleLogOut = () => {
        history.push("/ali")
    }

    return (

        <View style={styles.container}>

            <AppBar style={{ backgroundColor: "#bc477b" }}>
                <Toolbar>
                    <IconButton className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Photo Content
                    </Typography>
                    <TextField style={{
                        borderRadius: 5,
                        width: 250,

                        backgroundColor: '#ffb2dd',

                    }}
                        variant="outlined"
                        placeholder='Search for a photo'
                        value={Search}
                        onChange={handleSearch}
                    >

                    </TextField>

                    <Button style={{
                        marginRight: 420
                    }}
                        onClick={submit}
                    >Search</Button>
                    <Button color="inherit"
                        onClick={handleLogOut}
                    >LogOut
                    </Button>
                </Toolbar>
            </AppBar>


            {/* <TouchableOpacity style={styles.button} onPress={submit} >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity> */}




            <FlatList

                nativeID="amer"
                data={result}
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
                                        <IconButton onClick={() => save(item)} onChange={handleImg} aria-label="add to favorites" style={{ height: 20, width: 25, }} color='white'>

                                            <FavoriteIcon style={{ justifyContent: 'center', alignItems: 'center' }} />

                                        </IconButton>

                                    </CardActions>
                                </CardContent>

                            </Card>

                        </ListItem>)
                }}
                keyExtractor={
                    (index) => { return index }
                }

            />

            {/* {img.length != 0 && <Fav data={img}> </Fav>} */}


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
        marginTop: 100,
        textAlign: 'center',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#83bec4',
        height: 40,
        width: 150,
        marginTop: 60,
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