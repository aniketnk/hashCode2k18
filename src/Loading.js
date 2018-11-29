import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native'

export default class Loading extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Image source={require('./../assets/loading.gif')} /> */}
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})