import React, {Component} from 'react'; 
import {View, Text, Button,TextInput, StyleSheet} from 'react-native';

export default class ClassComponentExample extends Component{
    render(){
        return(
            <View  style = {customeStyle.view}> 
                <ClassComponent labelName = 'Name:'/>
                <FunactionalComponent  placeHolderLabel = 'Please enter your name'/>

                <ClassComponent labelName = 'Address:'/>
                <FunactionalComponent placeHolderLabel = 'Please enter your address'/>
            </View>
        );
    }
}


class ClassComponent extends Component{
    render(){
        return(
            <Text style = {{fontSize:18, fontWeight:'bold', marginTop:20}}> {this.props.labelName} </Text>
        );
    }
}

const FunactionalComponent = (props) => {
    return(
        <View >
            <TextInput style={customeStyle.textStyleSheet}  placeholder = {props.placeHolderLabel}   /> 
        </View>
    );
}