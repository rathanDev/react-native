import React, {Component} from 'react'
import {Text, View} from 'react-native'

// import {MapView} from 'react-native'
// import MapViewExample from './MapViewExample'

// import Bananas from './Bananas'
//import LotsOfGreetings from './LotsOfGreetings'
// import BlinkApp from './BlinkApp'
// import LotsOfStyles from './LotsOfStyles'
// import FixedDimensionBasics from './FixedDimensionsBasics'
// import FlexDimensionBasics from './FlexDimensionsBasics'
// import PizzaTranslator from './PizzaTranslator'
// import ButtonBasics from './ButtonBasics'
// import FlatListBasics from './FlatListBasics'
//import SectionListBasics from './SectionListBasics'
// import Movies from './Movies'
import HomeContainer from './HomeContainer'

class Home extends Component {

    state = {
        myState: "This is my state at Home"
    }

    constructor() {
        super();
    }

    render() {
        return (

            // <View>
            //     <Text>
            //         {this.state.myState}
            //     </Text>
            // </View>

            // <MapViewExample/>
            //<Bananas></Bananas>
            // <LotsOfGreetings/>
            //<BlinkApp/>
            // <LotsOfStyles></LotsOfStyles>
            // <FixedDimensionBasics/>
            // <FlexDimensionBasics/>

            //<PizzaTranslator/>
            //<ButtonBasics/>
            // <FlatListBasics/>
            // <SectionListBasics/>
            // <Movies/>

            <HomeContainer/>
        )
    }

}

export default Home;