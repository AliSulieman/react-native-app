import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
import Signup from './component/logger/signup';
import Login from "./component/logger/Login"


export default class App extends React.Component {
  render() {
    return (
      <view>
        <Login>

        </Login>
      </view>
    )
  };
}

const styles = StyleSheet.create({
  container: {

  },
});
