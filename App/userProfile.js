import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class UserProfile extends Component {
    render() {
        return (
            <View>
                <Text>This is the UserProfile screen</Text>
                <Button onPress={() => this.props.navigation.navigate('SettingScreen')} title="next screen" />
            </View>
        )
    }
}

export default UserProfile