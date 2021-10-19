import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'




//Authoress: Abhishek from Cody Info: 22 Jun 23 At 5:00PM | StatusBar Example
export default class StatusBarExample extends Component{
    render(){
        return(
            <View style={customeStyle.container}>
                    <StatusBar
                        backgroundColor = "green"
                        barStyle = 'light-content'
                        hidden = {true}
                    />

                   <Text style = {customeStyle.pageTitle}>StatusBar Example 2021</Text> 
                    <View style={customeStyle.image}>
                        <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                    </View>
            </View>
        );
    } 
}





const customeStyle = StyleSheet.create({
       container: {
           flex:1,
            backgroundColor:'#DCDCDC', 
            borderColor:"#DCDCDD", 
            borderWidth:2,
            borderRadius:20,
            margin:20, 
            padding:10,
            shadowOpacity:10,
            shadowRadius:10,
            elevation:10
        },
        pageTitle:{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'center',
            fontSize: 25,
            fontWeight: 'bold', 
            color: 'green', 
            padding:10 
        },image: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
});





















/*
const ChnageStatusBarStyle1=(props) =>{
    return(
        <View>
            <StatusBar  
                backgroundColor = "red"  
                barStyle = "dark-content"
                hidden = {false}    
                translucent = {true}  
            /> 
        </View>
     );
}

const ChnageStatusBarStyle2=() =>{
    return(
        <View>
            <StatusBar 
                barStyle="light-content" 
                backgroundColor="#6a51ae"
                hidden = {false}    
                ranslucent = {true}  
            />
        </View>
     );
}
*/