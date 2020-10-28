import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import Login from "./component/logger/Login"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './component/logger/signup';

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (

      <View>
        <Login></Login>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signUp" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>


    )
  };
}

