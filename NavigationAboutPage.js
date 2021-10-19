import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default class NavigationAboutPage extends Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignItems:'center' }}>
                <Text style={{fontSize:30, color:'green', margin:20}}>About Page</Text>

                <Button 
                        title="Go to Contact US Page" 
                            onPress={()=> this.props.navigation.navigate('Contact')}
                      >
                    </Button>
            </View>
        );
    }
}