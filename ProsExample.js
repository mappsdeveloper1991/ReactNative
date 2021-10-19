import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, style, Alert, Image} from 'react-native'




class ParrentProps extends Component {
    render(props){
        return(
            <View>
                <Text style = {{fontSize: 20, fontFamily: 'Helvetica',fontWeight: 'normal', textAlign: 'left', color: '#680000' }}>{this.props.titleName} Welcome to Cody Info </Text>
           </View>
        );
    }
}



export default class PropsExample extends Component{
    render(){
        return(
            <View style= {customeStyle.view}>
                    <ParrentProps titleName = 'Abhi' />
                    <ParrentProps titleName = 'React'  />
                    <ParrentProps titleName = 'Native'  />
                    <ParrentProps titleName = 'Developer'  />
                    <ParrentProps titleName = 'Expert'  />
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