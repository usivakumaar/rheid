import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Settings from './App/setting';
import Home from './App/home';
import UserProfile from './App/userProfile';
import RiderList from './App/riderList';
import OfferRide from './App/offerRide';
import TakeRide from './App/takeRide';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  SettingScreen: { screen: Settings },
  UserProfileScreen: { screen: UserProfile },
  RiderListScreen: { screen: RiderList },
  OfferRideScreen: { screen: OfferRide },
  TakeRideScreen: { screen: TakeRide },

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
