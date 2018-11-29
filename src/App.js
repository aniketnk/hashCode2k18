import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

// import the different screens
import PreAuth from './PreAuth'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import ShowQR from './showQR'
import ScheduleView from './ScheduleView'

const AppStack = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: "#code 2k18"
    }
  },
  ShowQR: {
    screen: ShowQR,
    navigationOptions: {
      title: "QR Code"
    }
  },
  ScheduleView: {
    screen: ScheduleView,
    navigationOptions: {
      title: "Schedule"
    }
  }
});

const AuthStack = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

const App = createSwitchNavigator(
  {
    AuthLoading: PreAuth,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default App
