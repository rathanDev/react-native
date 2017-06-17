import React, {Component} from 'react';
import {StyleSheet, Text, View, MapView} from 'react-native';

import Home from './src/components/Home';

export default class App extends Component {
    render() {
        return (
            <View>
                <Home/>
            </View>
        );
    }
}