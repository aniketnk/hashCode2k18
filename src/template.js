import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default class bleh extends Component {
    constructor(props) {
        super(props);
        // this.state = { someField: false };
    }

    componentWillMount() {
        // Intructions to execute before mounting
    }

    componentDidMount()
    {
        // Intructions to execute after mounting
    }

    render() {
        // Return a view of what to render
        return(
            <View style={styles.container}>

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

