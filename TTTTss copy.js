import { text } from 'body-parser';
import React, {Component} from 'react'
import {View, Text, SectionList, StyleSheet} from 'react-native'




const groceryItems = [ 
    {itemsName: 'Fruts', data:['Apple', 'Banana', 'Cherry','Mangoes', 'Kiwi']},
    {itemsName: 'Vegitable', data:['Potatoes', 'Broccoli', 'Carrots',  'Garlic', 'Cabbage']},
    {itemsName: 'Hygienic', data:['Dental', 'HandWash', 'shoap']},
    {itemsName: 'Kitchen', data:['knife', 'Pots','Napkins']},
    {itemsName: 'Cleaning', data:['Detergents', 'Degreasers' , 'Abrasives']},
    {itemsName: 'Others', data:['Table', 'Doormat']},
]


export default class TTTTss extends Component{
    render(){
        return(
            <View>
                <Text style= {styles.textHeader}> Section List Example </Text>
                <View>
                    <SectionList  
                            sections={groceryItems}
                            renderItem={({item}) => 
                                <Text style={styles.item}>{item}</Text>
                            }  
                            renderSectionHeader={({section}) => 
                                <Text style={styles.sectionHeader}>{section.itemsName}</Text>
                            }  
                        keyExtractor={(item, index) => index}  
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({  
    container: {  
        flex: 1,
        marginTop: 40
    },  
    item: {  
        justifyContent: 'flex-start',
        fontFamily: 'Helvetica',
        fontSize: 24,
        padding:5,
        marginStart:30
    },
    sectionHeader:{
        justifyContent: 'flex-start',
        fontSize: 30,
        fontWeight:'bold',
        color: '#000',
        padding:5,
        marginTop:5
    },
    imageStyle: {
        margin:10, 
        padding:10, 
        height: 90,
        width:90,
        borderRadius: 90/2
    },
    textHeader:{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'green'
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

