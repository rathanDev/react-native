
import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Greeting extends Component {

    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }

}

export default class LotsOfGreetings extends Component {

    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Greeting name='configuration'/>
                <Greeting name='beanSource'/>
            </View>
        );
    }

}