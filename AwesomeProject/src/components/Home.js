import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Home extends Component {

    state = {
        myState: "This is my state at Home"
    }

    render() {
        return(
            <View>
                <Text>
                    {this.state.myState}
                </Text>
            </View>
        )
    }

}

export default Home;