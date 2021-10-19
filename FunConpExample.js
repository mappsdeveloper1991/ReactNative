import React, {Component} from 'react'; 
import {View, Text, Button,TextInput, StyleSheet} from 'react-native';

export default class FunConpExample extends Component{
    render(){
        return(
            <View  style = {customeStyle.view}> 
                <FunactionalComponent labelName = 'Name:' placeHolderLabel = 'Please enter your name'/>
                <FunactionalComponent labelName = 'Address:' placeHolderLabel = 'Please enter your address'/>
                <FunactionalComponent labelName = 'Mobile No:' placeHolderLabel = 'Please enter your mobile no'/>
                <FunactionalComponent labelName = 'Email iD:' placeHolderLabel = 'Please enter your emailid'/>
            </View>
        )
    }
}

const FunactionalComponent = (props) => {
    return(
        <View style = {{marginTop: 20}}>
            <Text style = {{fontSize:18, fontWeight:'bold'}}> {props.labelName} </Text>
            <TextInput style={customeStyle.textStyleSheet} placeholder = {props.placeHolderLabel}   /> 
        </View>
    );
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
         fontSize: 16,
         height: 50,

         borderWidth: 2,
         borderRadius: 15,
         borderColor: '#FFB6C1',
          
         textAlign: 'center',
         fontFamily: 'Helvetica'
     }


});







