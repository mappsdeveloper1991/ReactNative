import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet, Alert, TouchableOpacity, SafeAreaView} from 'react-native';

const frutsList = [ 
        {frutsName: 'Apples'},
        {frutsName: 'Bananas'},
        {frutsName: 'Cherry'}, 
        {frutsName: 'Damson plum'},
        {frutsName: 'Elderberry'}, 
        {frutsName: 'Fig'},
        {frutsName: 'Grapes'},
        {frutsName: 'Honeydew'},
        {frutsName: 'Indian Plum'}, 
        {frutsName: 'Jackfruit'},
        {frutsName: 'Kiwi'},
        {frutsName: 'Lime'},
        {frutsName: 'Mango'},
        {frutsName: 'Nectarine'},
        {frutsName: 'Olive'},
        {frutsName: 'Peach'},
        {frutsName: 'Quince'},
        {frutsName: 'Rambutan'},
        {frutsName: 'Starfruit'},
        {frutsName: 'Tomato'},
        {frutsName: 'Ugli Fruit'},
        {frutsName: 'Vanilla Beans'},
        {frutsName: 'Watermelon'},
        {frutsName: 'xx :)'},
        {frutsName: 'Yellow Passion Fruit'},
        {frutsName: 'Zucchini'}
]


const frutsListCustome =[  
    {frutsName: 'Apples', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/1/15/20151001144642%21Red_Apple.jpg'},
    {frutsName: 'Bananas' , ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Bananas_white_background.jpg'},
    {frutsName: 'Cherry', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/b/bb/20071204110320%21Cherry_Stella444.jpg'}, 
    {frutsName: 'Damson plum', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/8/8f/20170719135713%21Damson_plum_fruit.jpg'},
    {frutsName: 'Elderberry', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Sambucus-berries.jpg'}, 
    {frutsName: 'Fig', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/archive/0/04/20100807204118%21Fig.jpg'},
    {frutsName: 'Grapes', ImageURl: 'https://halfyourplate-4kgxi1gvwldjzby.stackpathdns.com/wp-content/uploads/2015/01/grapes_small.jpg'},
    {frutsName: 'Honeydew', ImageURl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Honeydew.jpg'}
] 

export default class SimpleFlateListExample extends Component{

    //Handdle rowItemClick Event
    didClickOnRowItems = (item) => {  
        Alert.alert( 'Oh!!, I am just hungry ',  item.frutsName);  
    } 

    render(){
        return(
            <View >
                <Text style= {{fontWeight:'bold', fontSize:20}}>Image URL from/Owner:- Wikibooks community and  Wikijunior:Fruit Alphabet  https://en.wikibooks.org/wiki/Wikijunior:Fruit_Alphabet</Text>
                <FlatList 
                    data = {frutsListCustome}
                    renderItem={({item}) =>  
                    <SafeAreaView>
                            <View style ={{flex:1, flexDirection:'row'}} key={Math.random().toString()} >
                                    <Image style = {styles.imageStyle} source={{uri: item.ImageURl}} />
                                    <Text style = {styles.item} 
                                        onPress={this.didClickOnRowItems.bind(this, item)}>
                                        {item.frutsName}
                                    </Text>
                            </View>
                            </SafeAreaView>
                    }
                    ItemSeparatorComponent = {itemSeperator}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({  
    container: {  
        flex: 1,
        marginTop: 60  
    },  
    item: {  
        justifyContent: 'center',
        alignItems: 'center', 
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 24,
        padding:10,
        margin:5
    },
    imageStyle: {
        margin:10, 
        padding:10, 
        height: 90,
        width:90,
        borderRadius: 90/2
    }
});


const itemSeperator = () => {
    return(
        <View 
            style = {{
                height: 0.5,
                width: '100%',
                backgroundColor : '#000000'
            }}>
        </View>
    );
}