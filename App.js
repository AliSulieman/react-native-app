import React from 'react';

import { View } from 'react-native';
import Login from "./component/logger/Login"
import HomeTem from "./component/logger/hometem"

import 'react-native-gesture-handler';
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import signup from './component/logger/signup';
import Homepage from './component/logger/homepage'
//import login from './component/logger/Login';


export default class App extends React.Component {

  render() {

    return (
      < View >

        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/homepage" component={Homepage} />

        </Router>


      </View >


    )

  };

}


