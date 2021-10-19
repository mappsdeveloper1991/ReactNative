import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';


export default class NavigationContactUsPage extends Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{fontSize:30, color:'red'}}>Contact Us Page</Text>
            </View>
        );
    }
}