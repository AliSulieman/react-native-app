import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
import Signup from './component/logger/signup';
import Login from "./component/logger/Login"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (

      <View>
        <Login>

        </Login>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="signUp" component={Signup} />

          </Stack.Navigator>

        </NavigationContainer>

      </View>


    )
  };
}

const styles = StyleSheet.create({
  container: {

  },
});
