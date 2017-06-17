import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Blink extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showText: true
        }

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText}
            })
        }, 1000)
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        )
    }

}

export default class BlinkApp extends Component {

    render() {
        return(
            <View>
                <Blink text='Props'></Blink>
                <Blink text='Vs'></Blink>
                <Blink text='State'></Blink>
            </View>
        )
    }

}