import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Home extends Component {
    render() {
        return (
            <View>
                <Text>This is the home screen</Text>
                <Button onPress={() => this.props.navigation.navigate('UserProfileScreen')} title="Login" />
            </View>
        )
    }
}

export default Home