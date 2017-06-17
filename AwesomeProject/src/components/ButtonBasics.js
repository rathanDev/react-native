import React, {Component} from 'react'
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native'

export default class ButtonBasics extends Component {

    _onPressButton() {
        Alert.alert("you tapped the button :@")
    }

    render() {
        return (
            <View>
                <Text>damn</Text>
                <Text>damn</Text>
                <Text>damn</Text>
                <Text>damn</Text>
                <Text>damn</Text>
                <Text>damn</Text>
                <Button onPress={this._onPressButton} title="Press Me"/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {

    }
})