import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import SingleMeal from './singleMeal';
import SingleItem from './singleItem';

export default class dataDisplay extends Component {
    constructor(props) {
        super(props);
        // this.state = { meals : false };
    }

    componentWillMount() {
        // Intructions to execute before mounting
    }

    componentDidMount() {
        // Intructions to execute after mounting
    }

    render() {
        // Return a view of what to render
        var meals = this.props.meals;
        var other = (this.props.other) ? this.props.other : new Object();
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {/* <Text> {JSON.stringify(other)}</Text> */}
                <SingleMeal mealName="Registration" mealValue={true} noTime={true}/>
                <SingleMeal mealName="Breakfast" mealValue={meals.breakfast} />
                <SingleMeal mealName="Lunch" mealValue={meals.lunchDay1} />
                <SingleMeal mealName="Snacks" mealValue={meals.snacks} />
                <SingleMeal mealName="Dinner" mealValue={meals.dinner} />
                <SingleMeal mealName="Mid-night snacks" mealValue={meals.mns} />
                {/* <SingleMeal mealName="Ethernet Cable" mealValue={other.ethernetCables} /> */}
                <SingleItem itemName="Ethernet cable" value={other.ethernetCables} taken={other.cablesGivenBack} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "black",
        // flex: 1,
        // alignItems: 'center'
    },
    textstyles: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'sans-serif-thin',
        margin: 20

    },
});

