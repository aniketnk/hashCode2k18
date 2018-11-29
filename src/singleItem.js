import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';



export default class singleItem extends Component {
    constructor(props) {
        super(props);
        // this.state = { someField: false };
    }

    componentWillMount() {
        // Intructions to execute before mounting
    }

    componentDidMount() {
        // Intructions to execute after mounting
    }

    render() {
        // Return a view of what to render
        var itemName = this.props.itemName;
        var value = this.props.value ? this.props.value : 0;
        var taken = this.props.taken ? this.props.taken : 0;

        var time = "";
        if (value || taken) {
            var d = Math.max(parseInt(value), parseInt(taken));
            d = new Date(d);
            time = d.toLocaleTimeString('en-IN');
            time = time.split(":")[0] + ':' + time.split(":")[1];
        }
        var icon = value ? require('./../assets/check.png') : require('./../assets/cross.png');

        return (
            <View style={[{ flexDirection: 'row' }, styles.container, { backgroundColor: (value && !taken) ? '#14A085' : '#cf6363' }]}>
                <View style={{ justifyContent: 'center', marginHorizontal: 8 }}>
                    <Image style={{ backgroundColor: 'transparent' }} source={icon} />
                </View>
                <Text style={[styles.textstyles, { alignSelf: 'flex-start', color: 'white' }]}> {itemName}</Text>
                <Text style={{ marginLeft: 'auto', alignSelf: 'flex-end', color: 'white' }}>{time}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        backgroundColor: '#cf6363',
        borderWidth: 0.5,
        borderColor: '#cd5c5c',
        marginVertical: 4,
        marginHorizontal: 8,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    textstyles: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'sans-serif',
    }
});

