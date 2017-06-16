import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class MyContainer extends Component {

    constructor() {
        super()
        this.state = {
            myText: 'state and myText from MyContainer'
        }
    }

    deleteText = () => {
        this.setState({myText:'deleted'})
    }

    render() {
        return(
            <View>
                <Text onPress={this.deleteText}>
                    {this.state.myText}
                </Text>
            </View>
        )
    }

}