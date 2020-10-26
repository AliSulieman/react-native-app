import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#00ffff'
  },
});
