
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'


export default class TouchableOpacityExample extends Component {
    render(){
        return(
            <View style = {customeStyle.view}>

                    <TouchableOpacity onPress = {() => console.log("Clicked on Text")}>
                        <Text>Hello Cody</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Button title = 'Press Me' onPress ={() =>console.log("Clicked on button") } />
                    </TouchableOpacity>   

            </View>
        );
    }
}














const customeStyle = StyleSheet.create({
    view: {
        flex:1,
         backgroundColor:'#D3D3D3', 
         borderColor:"#680000", 
         borderWidth:2,
         borderRadius:20,
         margin:10, 
         padding:10
     },
     textStyleSheet: {
         color: 'black',
         backgroundColor: 'white',
         fontSize: 24,
         height: 50,

         borderWidth: 2,
         borderRadius: 15,
         borderColor: '#FFB6C1',
          
         textAlign: 'center',
         fontFamily: 'Helvetica',
         fontWeight: 'bold'
     }


});