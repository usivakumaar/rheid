import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export class Home extends Component {
    static navigationOptions = {
        title: 'Ride Saver. Ride Longer',
        headerStyle: { backgroundColor: '#ebc66c' },
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' }
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../images/58657.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{ width: '50%' }} >
                            <Image source={require('../images/Bloom_Ride.png')} style={{ width: '100%', height: 150 }} />
                        </View>
                    </View>
                    <View style={{ flex: 0.7, alignItems: 'center' }} >
                        <View style={{ width: '70%' }} >
                            <TextField
                                label='User Name'
                                baseColor='rgba(255,255,255,1)'
                                textColor='rgba(255,255,255,1)'
                                tintColor='rgba(255,255,255,1)'
                                labelFontSize={18}
                            />
                        </View>
                    </View>
                    <View style={{
                        flex: 1.5,
                        alignItems: 'center'
                    }} >

                        <View style={{ width: '70%' }} >
                            <TextField
                                label='Password'
                                baseColor='rgba(255,255,255,1)'
                                textColor='rgba(255,255,255,1)'
                                tintColor='rgba(255,255,255,1)'
                                labelFontSize={18}

                            />
                        </View>

                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }} >
                        <View style={{ width: '80%' }} >
                            <Button
                                onPress={() => this.props.navigation.navigate('UserProfileScreen')}
                                title="Login"
                                color="#ebc66c"
                            />
                        </View>
                    </View>

                    <View style={{ flex: 0.2 }} >


                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', padding: 3 }} >
                        <View style={{ width: '50%', height: 50 }} >
                            <Text style={{ color: '#ffffff', textAlign: 'left' }}
                                onPress={() => this.props.navigation.navigate('UserProfileScreen')}
                            >
                                Create Account
                            </Text>
                        </View>
                        <View style={{ width: '50%', height: 50 }} >
                            <Text style={{ color: '#ffffff', textAlign: 'right' }}
                                onPress={() => this.props.navigation.navigate('UserProfileScreen')}
                            >
                                Forgot Password
                            </Text>
                        </View>
                    </View>

                </ImageBackground>

            </View>

        )
    }
}
export default Home