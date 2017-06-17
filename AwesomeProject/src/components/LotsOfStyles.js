import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class extends Component {
    render() {
        return(
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue}>Blu...ue</Text>

                <Text style={[styles.bigBlue, styles.red]}>blue, then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red, then blue</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red'
    }
})