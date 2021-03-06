/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class One extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Hello Universe!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';
//
// class Greeting extends Component {
//     render() {
//         return (
//             <Text>Hello {this.props.name}!</Text>
//         );
//     }
// }
//
// export default class LotsOfGreetings extends Component {
//     render() {
//         return (
//             <View style={{alignItems: 'center'}}>
//               <Greeting name='Rexxar' />
//               <Greeting name='Jaina' />
//               <Greeting name='Valeera' />
//             </View>
//         );
//     }
// }


import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};

        //toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 900);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    }

}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text="I love to blink"/>
                <Blink text="Blinking is great"/>
            </View>
        );
    }
}

AppRegistry.registerComponent('One', () => BlinkApp);
