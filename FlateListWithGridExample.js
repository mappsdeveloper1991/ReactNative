import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet, Alert} from 'react-native';

const frutsListCustome =[  
    {frutsName: 'Apples', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/1/15/20151001144642%21Red_Apple.jpg'},
    {frutsName: 'Bananas' , ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Bananas_white_background.jpg'},
    {frutsName: 'Cherry', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/b/bb/20071204110320%21Cherry_Stella444.jpg'}, 
    {frutsName: 'Damson plum', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/8/8f/20170719135713%21Damson_plum_fruit.jpg'},
    {frutsName: 'Elderberry', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Sambucus-berries.jpg'}, 
    {frutsName: 'Fig', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/0/04/20100807204118%21Fig.jpg'},
    {frutsName: 'Grapes', ImageURl: 'https://halfyourplate-4kgxi1gvwldjzby.stackpathdns.com/wp-content/uploads/2015/01/grapes_small.jpg'},
    {frutsName: 'Damson plum', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/8/8f/20170719135713%21Damson_plum_fruit.jpg'},
   ] 


  



export default class FlateListWithGridExample extends Component{
    render(){
        return(
            <View >
                 <FlatList 
                    data={ frutsListCustome }
                    renderItem={({item}) =>
                    <View style={stylesx.GridViewBlockStyle} >
                        <Image style = {stylesx.imageStyle} source={{uri: item.ImageURl}} />
                       <Text style={stylesx.GridViewInsideTextItemStyle}  onPress={this.didClickOnRowItems.bind(this, item)} >{item.frutsName} </Text>
                    </View>}
                    numColumns={3}
                />
              </View>
        );
    }


        //Handdle rowItemClick Event
        didClickOnRowItems = (item) => {  
            Alert.alert( 'Oh!!, I am just hungry ',  item.frutsName);  
        } 
        
        
}


const stylesx = StyleSheet.create({  
    GridViewBlockStyle: {
      justifyContent: 'center',
      flex:1,
      alignItems: 'center',
      height: 120,
      margin: 5,
      backgroundColor: '#004E7C'
    },
    GridViewInsideTextItemStyle: {
       color: '#fff',
       padding: 10,
       fontSize: 18,
       justifyContent: 'center',
     },
     imageStyle: {
        marginTop:15, 
        padding:5, 
        height: 60,
        width:60,
        borderRadius: 60/2,
        justifyContent: 'center',
        alignItems: 'center', 

    }
    })