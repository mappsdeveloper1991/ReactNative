import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, StatusBar, ActivityIndicator} from 'react-native'

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

//Authoress: Abhishek from Cody Info: 22 Jun 21 At 8:26PM   |  Alert / ActivityIndicator/Loader Example
export default class ActivityIndicatorLoader extends Component{

    state = { 
        animating: true 
    }  

    closeActivityIndicator = () => 
        setTimeout(() => 
            this.setState(
                {  
                    animating: false 
                }
        ),6000) 




    render(){
        const animating = this.state.animating
        return(
            <View style={customeStyle.container}>

                    <ChnageStatusBarStyle2/>
                    

                <Text style = {customeStyle.pageTitle}>ActivityIndicator/Loader Example 2021</Text> 
                  

                <ActivityIndicator  animating = {animating} size="large" color="#FF7F50" /> 
                <ActivityIndicator size="large" color="#40E0D0" />   
                <ActivityIndicator size="small" color="##FFBF00" />  
                


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
        },
        button: {
            borderRadius: 6,
            backgroundColor: '#1E6738',
            shadowColor: '#2AC062',
            shadowRadius: 25,
            marginTop:50,
            borderRadius:20
        },image: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
});