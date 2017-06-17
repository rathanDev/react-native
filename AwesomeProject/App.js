import React, {Component} from 'react';
import { StyleSheet, Text, View, MapView} from 'react-native';

import Home from './src/components/Home';

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      //   <Text>Change Change</Text>
       //   <Text>Another change</Text>
      // </View>

        <View>
            <Home></Home>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
