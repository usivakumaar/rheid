import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Settings from './App/setting';
import Home from './App/home';
import UserProfile from './App/userProfile';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  SettingScreen: { screen: Settings },
  UserProfileScreen: { screen: UserProfile },

});


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({

});
