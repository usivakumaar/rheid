import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export class UserProfile extends Component {
    static navigationOptions = {
        title: 'Your Profile',
        headerStyle: { backgroundColor: '#ebc66c' },
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' }
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }} >
                    <View style={{ width: '50%' }} >
                        <Image
                            source={{ uri: 'https://images.desimartini.com/media/uploads/2018-5/rashmika-mandanna.jpg' }} style={{ width: '100%', height: 180 }}
                            resizeMode='cover'
                            borderRadius={180} />
                    </View>
                </View>
                <View style={{ flex: 0.3, alignItems: 'center' }} >
                    <View style={{ width: '90%' }} >
                        <Text style={{ fontSize: 20, color: '#4CAF50', textAlign: 'center' }}>
                            Hello Rashmika
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 0.5,
                    alignItems: 'center'
                }} >

                    <View style={{ width: '90%' }} >
                        <Text style={{ fontSize: 24, color: '#050505', textAlign: 'center' }}>
                            Do you Offer Rides or Take Bikes ?
                        </Text>
                    </View>

                </View>
                <View style={{ flex: 0.4, alignItems: 'center' }} >
                    <View style={{ width: '80%' }} >
                        <Text style={{ fontSize: 18, color: '#050505', textAlign: 'center' }}>
                            You can change it any time
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 0.2 }} >


                </View>
                <View style={{ flex: 1, flexDirection: 'row', padding: 3 }} >
                    <View style={{ width: '50%', height: 120, padding: 3 }} >
                        <Button
                            title="I take rides"
                            color="#ebc66c"

                            buttonStyle={styles.button}
                            onPress={() => this.props.navigation.navigate('RiderListScreen')}
                        />
                    </View>
                    <View style={{ width: '50%', height: 120, padding: 3 }} >
                        <Button
                            title="I offer rides"
                            color="#ebc66c"
                            buttonStyle={styles.button}
                            onPress={() => this.props.navigation.navigate('RiderListScreen')}
                        />


                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        height: 120
    }
})

export default UserProfile