import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';



export default class singleMeal extends Component {
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
        var mealName = this.props.mealName;
        var mealValue = this.props.mealValue;
        var time = "";
        if (!this.props.noTime && mealValue) {
            var d = new Date(parseInt(mealValue));
            time = d.toLocaleTimeString('en-IN');
            time = time.split(":")[0] + ':' + time.split(":")[1];
        }
        var icon = mealValue ? require('./../assets/check.png') : require('./../assets/cross.png');

        return (
            <View style={[{ flexDirection: 'row' }, styles.container, { backgroundColor: mealValue ? '#14A085' : '#cf6363' }]}>
                <View style={{ justifyContent: 'center', marginHorizontal: 8 }}>
                    <Image style={{ backgroundColor: 'transparent' }} source={icon} />
                </View>
                <Text style={[styles.textstyles, { alignSelf: 'flex-start', color: 'white' }]}> {mealName}</Text>
                {mealValue &&
                    <Text style={{ marginLeft: 'auto', alignSelf: 'flex-end', color: 'white' }}>{time}</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
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

