
import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, style, Alert} from 'react-native'





export default class Button_TextInputExample extends Component{

    state = {
        name : '',
        location: ''
    }

  
    btnClick() {
        Alert.alert('Your name: ' +this.state.name +' and Location: '+this.state.location);
    }


    render(){
        return(
            <View style={customeStyle.view}>


                   

                   <TextInput style={customeStyle.textStyleSheet} 
                        placeholder = "Name"
                        onChangeText={text =>  this.setState({name: text})
                        }
                    /> 


                   <TextInput style={customeStyle.textStyleSheet} 
                        placeholder = "Location" 
                        onChangeText={text =>  this.setState({location: text}) }
                    /> 


                <View style={{marginTop:50}}>
                    <Button 
                        style={{margin: 10, marginTop:50, padding:20, marginHorizontal: 16}} 
                        title='Click Me' 
                        onPress={() => this.btnClick()}
                    />
                    
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
        }


});

























/*


import React, {Component, useState} from 'react';
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



                    <Text style={{fontSize:24, padding:10}} >Welcom to Cody Info.  
                           {this.state.myName ? 'Your Name: '+this.state.myName : ''}      {this.state.myLocation ? ' and your location: '+ this.state.myLocation: ''}
                    </Text>



                   <TextInput style={customeStyle.textStyleSheet} 
                        placeholder = "Name"
                        onChangeText={text =>  
                            this.setState({myName: text})
                        }
                    /> 

                   <TextInput style={customeStyle.textStyleSheet} 
                        placeholder = "Location" 
                        onChangeText={text =>  
                            this.setState({myLocation: text})
                        }
                    /> 

                  <View style={{marginTop:50}}>
                        <Button 
                            style={{margin: 10, marginTop:50, padding:20, marginHorizontal: 16}} 
                            title='Click Me' 
                           // onPress={() => this.btnClick()}
                         />
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




import React, {Component} from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';


export default class ComponentExample extends Component{

    render(){
        return(
            <View  style={customeStyle.view}>

               <ClassComponent />
               <FunctionalComponent yourName = 'Abhi Rai'/>
               
            </View>
        );

    }
}




  
const FunctionalComponent = (props) => {
    return (
      <View>
            <TextInput> {props.yourName}</TextInput>
      </View>
    );
}


class ClassComponent extends Component{
    render(){
        return(
            <View>
            <Text > What is your Name </Text>
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















import React, {Component, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, style, Alert, Image} from 'react-native'





export default class StateExample extends Component{
   

    state = {
        name : '',
        location: ''
    }
        
    



  
    btnClick() {
        Alert.alert('Your name: ' +this.state.name +' and Location: '+this.state.location);
    }


    render(){
        return(
            <View style={customeStyle.view}>


                    <View style={customeStyle.centerHorixontal}>
                        <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                    </View>

                    
                    <View style={customeStyle.centerHorixontal}>
                        <Image style={{width:100, height:100, display:'none' }} source={{uri:'https://images.pexels.com/photos/15286/pexels-photo.jpg'}} /> 
                    </View>



                    

                    <Text>Welcome to Cody Info.  {this.state.name ? 'Your Name: '+this.state.name : ''}  {this.state.location ? " and location: "+this.state.location : ''}</Text>

                   
                         
                       
                    




                   <TextInput style={customeStyle.textStyleSheet} 
                            placeholder = "Name"
                            value = {this.state.name}
                            onChangeText={text =>  this.setState({name: text})
                        }
                    /> 



                   <TextInput style={customeStyle.textStyleSheet} 
                        placeholder = "Location" 
                        value = {this.state.location}
                        onChangeText={text =>  this.setState({location: text}) }
                    /> 


                    


                <View style={{marginTop:50}}>
                    <Button 
                        style={{margin: 10, marginTop:50, padding:20, marginHorizontal: 16}} 
                        title='Click Me' 
                        onPress={() => this.btnClick()}
                    />
                    
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






import React, {Component, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, style, Alert, Image} from 'react-native'



class ChildTextInput extends Component{
    render(){
        return(
            <View>
            <TextInput style={customeStyle.textStyleSheet} placeholder = {this.props.placeholderHint} value = {this.props.valueText} />
           </View>
        );
    }

}





export default class PropsExample extends Component{
   

    state = {
        name : '',
        location: ''
    }
        
    



  
    btnClick() {
        Alert.alert('Your name: ' +this.state.name +' and Location: '+this.state.location);
    }


    render(){
        return(
            <View style={customeStyle.view}>


                    <View style={customeStyle.centerHorixontal}>
                        <Image style={{width:100, height:100 }} source={require('./assets/image_logo.png')} /> 
                    </View>

                    
                    <View style={customeStyle.centerHorixontal}>
                        <Image style={{width:100, height:100, display:'none' }} source={{uri:'https://images.pexels.com/photos/15286/pexels-photo.jpg'}} /> 
                    </View>



                    

                    <Text>Welcome to Cody Info.  {this.state.name ? 'Your Name: '+this.state.name : ''}  {this.state.location ? " and location: "+this.state.location : ''}</Text>

                   
                         
                       
                    




                   <TextInput style={customeStyle.textStyleSheet} 
                            placeholder = "Name"
                            value = {this.state.name}
                            onChangeText={text =>  this.setState({name: text})
                        }
                    /> 



                   <TextInput style={customeStyle.textStyleSheet} 
                        placeholder = "Location" 
                        value = {this.state.location}
                        onChangeText={text =>  this.setState({location: text}) }
                    /> 



<ChildTextInput placeholderHint='your name' valueText ='Abhishek' /> 

                  

                    


                <View style={{marginTop:50}}>
                    <Button 
                        style={{margin: 10, marginTop:50, padding:20, marginHorizontal: 16}} 
                        title='Click Me' 
                        onPress={() => this.btnClick()}
                    />
                    
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

*/