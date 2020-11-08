import React from 'react';

import { View } from 'react-native';
import Login from "./component/logger/Login"
import Signup from './component/logger/signup';
import 'react-native-gesture-handler';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import signup from './component/logger/signup';


export default class App extends React.Component {

  render() {
    return (

      <View>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={signup} />

        </Router>


      </View>


    )

  };

}


