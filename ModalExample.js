import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'

//Authoress: Abhishek from Cody Info: 22 Jun 21 At 9:26PM   |  Modal/Popup  Example
export default class ModalExample extends Component{
 
    state = {
        isModelVisible: false
    }

    render(){
        return(
            <View style={customeStyle.container}>
               
              <Modal
                    animationType = {'slide'}
                    transparent = {false}
                    visible = {this.state.isModelVisible}

                    onRequestClose={() => {  
                        this.setState({isModelVisible: false})
                    }}
                >
                <View style={customeStyle.containerModal}>
                    <View style={customeStyle.image}>
                        <Image source={require('./assets/image_logo.png')} style = { customeStyle.image }/>
                    </View>
                    <Text style = { customeStyle.textModal }> Welcome to Cody Info. A fully free E-Learning Plateform</Text>
                    <TouchableOpacity style={customeStyle.button} >
                            <Button  title='Close Modal'  onPress={() => {this.setState({isModelVisible: false}); }}/>
                    </TouchableOpacity>
                </View>

              </Modal>


                <Text style = {customeStyle.pageTitle}>Model Example 2021</Text> 
                <View style={customeStyle.image}>
                    <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                </View>
                <TouchableOpacity  style={customeStyle.button}>
                    <Button  title='Open Modal' onPress={() => this.setState({isModelVisible: true})} /> 
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
        image: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
        text: {
            fontSize: 24,
            marginBottom: 30,
            padding: 40,
        },
        button: {
            borderRadius: 6,
            backgroundColor: '#1E6738',
            shadowColor: '#2AC062',
            shadowRadius: 25,
            marginTop:50,
            borderRadius:20
        },
        containerModal: {
             backgroundColor:'#111', 
             borderColor:"#DCDCDD", 
             borderWidth:2,
             borderRadius:20,
             margin:10, 
             padding:10,
             shadowOpacity:10,
             shadowRadius:10,
             elevation:10
         },
         textModal: {
            fontSize: 20,
            marginBottom: 10,
            padding: 10,
            color:'white'
        }
});



















/*

export default class ModalExample extends Component{
    state = {
        isModelVisible: false
    };

    //Show & Hide Modal View
    showHideModel(isShow){
        this.setState({isModelVisible: isShow})
    }

    render(){
        return(
            <View style={customeStyle.container}>

                 <Modal 
                    animationType = {'slide'}
                    transparent = {false}
                    visible = {this.state.isModelVisible}
                    onRequestClose={() => {  
                        this.setState({isModelVisible: false})
                    }}>

                    <View style={customeStyle.containerModal}>
                        <View style={customeStyle.image}>
                            <Image source={require('./assets/image_logo.png')} style = { customeStyle.image }/>
                        </View>
                        <Text style = { customeStyle.textModal }> Welcome to Cody Info. A fully free E-Learning Plateform</Text>
                        <TouchableOpacity style={customeStyle.button} >
                                <Button  title='Close Modal'  onPress={() => {this.setState({isModelVisible: false}); }}/>
                        </TouchableOpacity>
                    </View>
                </Modal>

                   <Text style = {customeStyle.pageTitle}>Model Example 2021</Text> 
                    <View style={customeStyle.image}>
                        <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                    </View>

                    <TouchableOpacity  style={customeStyle.button}>
                        <Button  title='Open Modal'  onPress ={() => this.setState({isModelVisible: true})}/>
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
        image: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
        text: {
            fontSize: 24,
            marginBottom: 30,
            padding: 40,
        },
        button: {
            borderRadius: 6,
            backgroundColor: '#1E6738',
            shadowColor: '#2AC062',
            shadowRadius: 25,
            marginTop:50,
            borderRadius:20
        },
        containerModal: {
             backgroundColor:'#111', 
             borderColor:"#DCDCDD", 
             borderWidth:2,
             borderRadius:20,
             margin:10, 
             padding:10,
             shadowOpacity:10,
             shadowRadius:10,
             elevation:10
         },
         textModal: {
            fontSize: 20,
            marginBottom: 10,
            padding: 10,
            color:'white'
        }
});



*/



