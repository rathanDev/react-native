// import React, {Component} from 'react';
// import {Text, View} from 'react-native';

// import PresentationalComponent from './PresentationalComponent'
//
// class Home extends Component {
//
//     state = {
//         myState: 'My State from Home'
//     };
//
//     render() {
//         return (
//             <View>
//                 <PresentationalComponent myState={this.state.myState}/>
//             </View>
//         )
//     }
//
// }
//
// export default Home;


import React from 'react'

import List from './List'

const Home = () => {
    return (
        <List/>
    )
}

export default Home