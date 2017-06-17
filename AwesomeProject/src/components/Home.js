import React, {Component} from 'react'
import {Text, View} from 'react-native'

// import {MapView} from 'react-native'
// import MapViewExample from './MapViewExample'

// import Bananas from './Bananas'

//import LotsOfGreetings from './LotsOfGreetings'

import BlinkApp from './BlinkApp'

class Home extends Component {

    state = {
        myState: "This is my state at Home"
    }

    constructor() {
        super();
    }

    render() {
        return(
            // <View>
            //     <Text>
            //         {this.state.myState}
            //     </Text>
            // </View>

            // <MapViewExample/>

            //<Bananas></Bananas>

            // <LotsOfGreetings/>

            <BlinkApp/>
        )
    }

}

export default Home;