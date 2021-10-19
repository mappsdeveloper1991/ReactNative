import React, {Component} from 'react';
import {View, StyleSheet} from  'react-native';


export default class ViewExample extends Component{

  render(){
    return(
      <View style={{flex: 1, flexDirection:'row', backgroundColor: 'red' }} > 
          <View style={{flex: 0.5, flexDirection:'column', backgroundColor: 'green', padding:15 }} > 
              <View style={{flex: 0.2, backgroundColor: 'orange' }} /> 
              <View style={{flex: 0.5, backgroundColor: 'purple' }} />  
              <View style={{flex: 0.3, backgroundColor: 'blue' }} /> 
          </View>
          <View style={{flex: 0.3, backgroundColor: 'yellow' }} />  
          <View style={{flex: 0.2, backgroundColor: 'black' }} /> 

      </View>
    );
  }

}


