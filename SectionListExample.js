
import React, {Component} from 'react'
import {Text, View, SectionList, StyleSheet} from 'react-native'

//Authoress: Abhishek from Cody Info: 21 Jun 21 At 9:26PM   | DataSet for Section List Example with section Header & Items
const groceryItems = [ 
    {itemsName: 'Fruts', data:['Apple', 'Banana', 'Cherry','Mangoes', 'Kiwi']},
    {itemsName: 'Vegitable', data:['Potatoes', 'Broccoli', 'Carrots',  'Garlic', 'Cabbage']},
    {itemsName: 'Hygienic', data:['Dental', 'HandWash', 'shoap']},
    {itemsName: 'Others', data:['Table', 'Doormat']}
]
//Authoress: Abhishek from Cody Info: 21 Jun 21 At 9:26PM   | Class for Section List Example with section Header & Items
export default class SectionListExample extends Component{
    render(){
        return(
            <View style = {style.container}>
                   <Text style = {style.pageTitle}>SectionList Example 2021</Text> 
                   <SectionList 
                        sections={groceryItems}
                        renderItem={({item}) => 
                            <Text style={style.sectionItems}>{item}</Text>
                        }
                        renderSectionHeader={({section}) =>
                            <Text style={style.sectionHeaderItem}>{section.itemsName}</Text>
                        }
                        keyExtractor={(item, index) => index} 
                   />
            </View>
        );
    }
}
//Authoress: Abhishek from Cody Info: 21 Jun 21 At 9:26PM   | StyleSheet for Section List Example with section Header & Items
const style = StyleSheet.create({    
    container:{ flex: 1, padding:10, margin:10, backgroundColor:'#DCDCDC', borderRadius:15, elevation:5, shadowOpacity:5, shadowRadius:5 },
    pageTitle:{fontSize: 25, fontWeight: 'bold', color: 'green', padding:10 },
    sectionHeaderItem:{justifyContent: 'flex-start', fontSize: 25, fontWeight:'bold', color: 'green', padding:5, marginTop:5},
    sectionItems:{fontSize: 20, color: 'black', marginStart:10, padding:5}
});












/*

sectionHeaderItem:{
        justifyContent: 'flex-start',
        fontSize: 25,
        fontWeight:'bold',
        color: 'green',
        padding:5,
        marginTop:5
    },
    sectionItems:{
        fontSize: 20,
        color: 'black',
        marginStart:10,
        padding:5
    }

 <SectionList
                        sections = {groceryItems}
                        renderItem = {({item}) =>
                            <Text style = {style.sectionItems}>{item}</Text>
                         }
                         
                         renderSectionHeader = {({section}) =>
                            <Text style = {style.sectionHeaderItem}>{section.itemsName}</Text>
                        }

                        keyExtractor={(item, index) => index} 
                    />
*/