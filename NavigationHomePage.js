import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

export default class NavigationHomePage extends Component{
    render(){
        return(
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignItems:'center' }}>
                    <Text style={{fontSize:30, color:'blue', margin:20}}>Home Page</Text>
                    <Button 
                        title="Go to About US Page" 
                            onPress={()=> this.props.navigation.navigate('Contact')}
                        >
                    </Button>
            </View>
        );
    }
}