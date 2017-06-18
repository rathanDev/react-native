import React, {Component} from 'react'
import {ActivityIndictator, ListView, Text, View} from 'react-native'

export default class Movies extends Component {

    constructor() {
        super()
        this.state = {
            isLoading : true
        }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource()
            })
    }

}