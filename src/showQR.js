import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase'
import QRgenerate from './qrGenerate';
import Loading from './Loading';


export default class showQR extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null, loading: true };
    }

    componentDidMount() {
        var self = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                self.setState({ user, loading: false });
            } else {
                self.props.navigation.navigate('Auth');
            }
        });
    }

    render() {
        var user = this.state.user;
        if (this.state.loading)
            return <Loading />;
        else
            return (
                <View style={styles.container}>
                    <QRgenerate message={user.uid} />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

