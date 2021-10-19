import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'




//Authoress: Abhishek from Cody Info: 22 Jun 21 At 8:26PM   |  Alert / Alert Dialog Example
export default class AlertDialog extends Component{


    showAlertDialog1(){
        Alert.alert(
            'Alert Title',
            'Alert Message'
        );
    }
    showAlertDialog2(){
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'No',
                    onPress: () => console.log("click on camcel"),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => console.log("click on OK")
                }
            ]
        );
    }
    showAlertDialog3(){
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'No',
                    onPress: () => console.log("click on camcel"),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => console.log("click on OK")
                },
                {
                    text: 'Later',
                    onPress: () => console.log("click on Later")
                }
            ],
            {cancelable: true}  
        );
    }


   


    render(){
        return(
            <View style={customeStyle.container}>
                   <Text style = {customeStyle.pageTitle}>Alert Dialog Example 2021</Text> 
                    <View style={customeStyle.image}>
                        <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                    </View>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 1' onPress={() => {this.showAlertDialog1();}} />
                    </TouchableOpacity>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 2' onPress={() => {this.showAlertDialog2();}} />
                    </TouchableOpacity>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 3' onPress={()=> {this.showAlertDialog3();}}/>
                    </TouchableOpacity>
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






















/*
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'

//Authoress: Abhishek from Cody Info: 22 Jun 21 At 8:26PM   |  Alert / Alert Dialog Example
export default class AlertDialog extends Component{

    //Positive(OK).
    showAlert1() { 
        Alert.alert(
            'Alert Title',  
            'Alert Message'
        ); 
    } 

    //Negative(Cancel), Positive(OK).
    showAlert2() {  
        Alert.alert(  
            'Alert Title',  
            'Alert Message',  
                [  
                    {  
                        text: 'Cancel',  
                        onPress: () => console.log('Cancel Pressed'),  
                        style: 'cancel',  
                    },  
                    {   
                        text: 'OK', 
                        onPress: () => console.log('OK Pressed')
                    },  
                ]  
        );  
    }  

    //Neutral(Later), Negative(Cancel), Positive(OK).
    showAlert3() {  
        Alert.alert(  
            'Alert Title',  
            'Alert Message',  
                [  
                    {
                        text: 'Ask me later', 
                        onPress: () => console.log('Ask me later pressed')
                    },  
                    {  
                        text: 'Cancel',  
                        onPress: () => console.log('Cancel Pressed'),  
                        style: 'cancel',  
                    },  
                    {   text: 'OK', 
                        onPress: () => console.log('OK Pressed')
                    },  
                ],  
            {cancelable: false}  
        )  
    }

    render(){
        return(
            <View style={customeStyle.container}>
                   <Text style = {customeStyle.pageTitle}>Alert Dialog Example 2021</Text> 
                    <View style={customeStyle.image}>
                        <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                    </View>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 1' onPress={() => {this.showAlert1() }}/>
                    </TouchableOpacity>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 2' onPress={() => {this.showAlert2() }}/>
                    </TouchableOpacity>



                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Alert 3' onPress={() => {this.showAlert3() }}/>
                    </TouchableOpacity>
            </View>
        );
    } 
}

*/