
import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, style} from 'react-native'





export default class TextInputExample extends Component{

     
    btnClick(text) {
        //console.log(" "+text);
    }

    render(){
        return(
            <View style={customeStyle.view}>
                   <TextInput style={customeStyle.textStyleSheet} 
                        placeholder = "Enter your Email ID"
                        onChangeText={text =>  console.log(" "+text)}
                    > 
                   Hello Cody Info</TextInput>



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

















