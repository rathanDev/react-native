import React, {Component} from 'react'
import {AppRegistry, Image} from 'react-native'

export default class Bananas extends Component {

    render() {
        let pic = {
            uri: 'https://s-media-cache-ak0.pinimg.com/736x/87/23/f1/8723f1556cbf71b71bda839e71322a65.jpg'
        };
        return (
            <Image source={pic} style={{width:193, height:110}}/>
        );
    }

}

// AppRegistry.registerComponent('Bananas', () => Bananas);