"use strict";

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode';

export default class QRgenerate extends Component {

    render() {
        return (
            <View style={styles.container}>
                <QRCode
                    value={this.props.message}
                    size={200}
                    bgColor='black'
                    fgColor='white' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 220,
        width: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#cd5c5c',
        borderWidth: 3,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
