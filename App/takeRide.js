import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
export class TakeRide extends Component {
    static navigationOptions = {
        title: 'Take Ride',
        headerStyle: { backgroundColor: '#ebc66c' },
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' }
    };
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.container} >
                    <MapView style={styles.map}
                        region={{
                            latitude: 20.5937,
                            longitude: 78.9629,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                    </MapView>
                </View>
                <View style={{
                    flex: 0.2, height: 50, flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#ffffff'
                }} >
                    <View style={{ flex: 0.2 }} >
                        <Image
                            source={{ uri: 'https://images.desimartini.com/media/uploads/2018-5/rashmika-mandanna.jpg' }} style={{ width: '80%', height: 60 }}
                            resizeMode='cover'
                            borderRadius={60} />
                    </View>
                    <View style={{ flex: 0.6 }} >
                        <Text style={{ fontSize: 16 }}>Rashmika</Text>
                        <Text style={{ fontSize: 13 }}>source 1</Text>
                        <Text style={{ fontSize: 13 }}>destination 1</Text>
                        <Text style={{ fontSize: 11 }}>Fare Rs 123</Text>

                    </View>
                    <View style={{ flex: 0.1 }} >

                    </View>

                </View>
                <View style={{ flex: 0.1, height: 70, paddingLeft: '3%', paddingTop: '1%', backgroundColor: '#ffffff' }} >
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('TakeRideScreen')}
                    >
                        <Text style={{ color: "#ffffff", textAlign: 'center' }}> Confirm </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({

    button: {
        alignContent: 'center',
        padding: 4,
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
        borderWidth: 1.5,
        borderRadius: 9,
        width: '96%'
    },
    container: {
        flex: 0.7
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

    }
})

export default TakeRide;