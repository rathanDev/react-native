import React, {Component} from 'react'
import {View, WebView, StyleSheet} from 'react-native'

export default WebViewExample = (props) => {
    return (
        <View style={styles.container}>
            <WebView source={{
                   uri: 'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint'
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 350
    }
})