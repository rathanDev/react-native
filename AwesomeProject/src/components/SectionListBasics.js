import React, {Component} from 'react'
import {SectionList, StyleSheet, ListView, Text, View} from 'react-native'

export default class SectionListBasics extends Component {
    render() {
        return (
            <View>

                <SectionList

                    sections={[
                    {title:'D', data:['Devin']},
                    {title:'J', data:['Jackson', 'James', 'Jilliam', 'Jimmy']}
                ]}

                    renderItem={({item}) => <Text>{item}</Text>}

                    renderSectionHeader={({section}) => <Text>{section.title}</Text>}

                />

            </View>
        )
    }
}