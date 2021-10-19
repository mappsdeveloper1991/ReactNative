



import React, {Component} from 'react';
import {View, Text, StyleSheet, style} from 'react-native'



export default class TextExample extends Component{

    render(){
        return(
            <View style={{backgroundColor: 'red', flex:1}}>
                <Text>Welcome to Cody Info</Text>

                <Text style={{color: 'white', backgroundColor:'green'}}>Hello Cody, with bg and text color</Text> 

                <Text style={{color: 'back', backgroundColor:'yellow', fontFamily:'Helvetica', fontWeight:'bold', fontSize:34}}>Hello Cody, with bg and text color</Text> 


                <Text style={{color: 'black', backgroundColor:'yellow', fontFamily:'Helvetica', fontWeight:'bold', fontSize:34, borderWidth:5, borderRadius:15, borderColor:'grey', margin:10, padding:10}}>Hello Cody, with bg and text color</Text> 


                <Text style={styleText.textFont} > Text with Comman and Global Style with attribute </Text>

            </View>
        );
    }

}



const styleText = StyleSheet.create({
    textFont: {
        fontFamily:'Helvetica', 
        fontWeight:"bold",
        fontSize: 18,

        color: "#FFFFFF",
        backgroundColor: "#000000",
        borderColor:'grey', 

        padding: 20, 
        margin: 20, 
        borderWidth:4, 
        borderRadius:10, 
        alignContent:'center'
    }
  });


















