import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, style, Alert, Image} from 'react-native'





export default class StateExample extends Component{
    state = {
        myName: '',
        myLocation: ''
    }

    render(){
        return(
            <View style={customeStyle.view}>
                    <View style={customeStyle.centerHorixontal}>
                        <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                    </View>

                    <Text>Welcome to Cody Info. {this.state.myName ? 'My Name: '+this.state.myName : ''}   {this.state.myLocation ? ' and your location: '+this.state.myLocation : '' }</Text>     

                   <TextInput style={customeStyle.textStyleSheet} placeholder = "Name"  onChangeText={text =>  this.setState({myName: text}) } /> 
                   <TextInput style={customeStyle.textStyleSheet}   placeholder = "Location"  onChangeText={text =>    this.setState({myLocation: text}) }/> 

                <View style={{marginTop:50}}>
                    <Button  style={{margin: 10, marginTop:50, padding:20, marginHorizontal: 16}}  title='Click Me'  />
                </View>
                    
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
            fontWeight: 'bold',
            marginTop:20
        },
        centerHorixontal: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        }


});









