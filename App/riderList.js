import React, { Component } from 'react';
import { View, Text, Button, ListView, Image, TouchableHighlight, StyleSheet } from 'react-native';

export class RiderList extends Component {
    static navigationOptions = {
        title: 'Matching Option',
        headerStyle: { backgroundColor: '#ebc66c' },
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' }
    };
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([{
                "name": "Rashmika",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }, {
                "name": "Rashmika 1",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }, {
                "name": "Rashmika 1",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }, {
                "name": "Rashmika 1",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }, {
                "name": "Rashmika 1",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }, {
                "name": "Rashmika 1",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }, {
                "name": "Rashmika 1",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }, {
                "name": "Rashmika 1",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }, {
                "name": "Rashmika 1",
                "image": "url",
                "source": "source 1",
                "destination": "source 2"
            }]),
        };
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <View
                        borderBottomWidth={0.6}
                        borderBottomColor="#cfcfcf"
                        style={{
                            height: 150,
                            padding: 10,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}
                    >
                        <View style={{ flex: 0.2 }} >
                            <Image
                                source={{ uri: 'https://images.desimartini.com/media/uploads/2018-5/rashmika-mandanna.jpg' }} style={{ width: '80%', height: 60 }}
                                resizeMode='cover'
                                borderRadius={60} />
                        </View>
                        <View style={{ flex: 0.6 }} >
                            <Text style={{ fontSize: 16 }}>{rowData.name}</Text>
                            <Text style={{ fontSize: 13 }}>{rowData.source}</Text>
                            <Text style={{ fontSize: 13 }}>{rowData.destination}</Text>

                        </View>
                        <View style={{ flex: 0.2 }} >
                            <TouchableHighlight
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('TakeRideScreen')}
                            >
                                <Text style={{ color: "#4CAF50", textAlign: 'center' }}> Invite </Text>
                            </TouchableHighlight>
                        </View>

                    </View>

                }
            />
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        alignContent: 'center',
        padding: 4,
        borderColor: '#4CAF50',
        borderWidth: 1.5,
        borderRadius: 9,

    }
})

export default RiderList;