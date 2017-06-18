import React, {Component} from 'react'
import {FlatList, StyleSheet, ListView, Text, View} from 'react-native'

export default class FlatListBasics extends Component {

    render() {
        return (
            <View>
                <FlatList
                    data={[
                    {key: 'Devin1'},
                    {key: 'Devin2'},
                    {key: 'Devin3'},
                    {key: 'Devin4'},
                    {key: 'Devin5'},
                    {key: 'Devin6'},
                    {key: 'Devin7'},
                    {key: 'Devin8'}
                    ]}
                    renderItem={
                        ({item}) => <Text>{item.key}</Text>
                    }
                />
            </View>
        )
    }

}