import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import homePage  from './NavigationHomePage';
import aboutPage  from './NavigationAboutPage'
import contactPage  from './NavigationContactUsPage'


const stack =  createStackNavigator();

function HeaderTitle() {
    return (
      <View  style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:0.10, marginLeft: -20}}>
            <Image
                style={{ width: 40, height: 40,  borderRadius: 20}}
                source={require('./assets/image_logo.png')}
            />
        </View>

            <View style={{flex: 0.80}}>
                <Text style={{textAlign:'left', justifyContent:'center', alignContent:'center', padding:4, fontSize:20, fontWeight:'bold', marginLeft:10}}> Wlecome to About Page </Text>
            </View>
        </View>
    );
}



//Authoress: Abhishek from Cody Info: 28 Jun  At 04:00PM | Stack Navigation Example
export default class NavigationStackExample extends Component{
    render(){
        return(
            <NavigationContainer>
                <stack.Navigator initialRouteName='HomePage' screenOptions={{
                    title: "My App",
                    headerStyle:{
                        backgroundColor: 'green',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle:{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }
                }}>
                    <stack.Screen name='HomePage' component={homePage}/>
                    <stack.Screen name='About' component={aboutPage} 
                        options={{
                            headerTitle: props => <HeaderTitle {...props} />,
                            title: "My About",
                            headerStyle:{
                                backgroundColor: 'red',
                            },
                            headerTintColor: 'white',
                            headerTitleStyle:{
                                fontSize: 25,
                                fontWeight: 'bold',
                            },
                        }}
                    />
                    <stack.Screen name='Contact' component={contactPage}/>
                </stack.Navigator>
            </NavigationContainer>
            
        );
    }
}












/*

screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign:'center'
        },
      }}



      options={{ 
              headerTitle: props => <LogoTitle {...props} />,
                title: 'My Contact',
                
                headerStyle: {
                    backgroundColor: 'white',
                  },
                  headerTintColor: 'tomato',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}



function LogoTitle() {
    return (
      <View  style={{flex:1, flexDirection:'row'}}>
        <View style={{flex:0.10, marginLeft: -20}}>
            <Image
                style={{ width: 40, height: 40,  borderRadius: 20}}
                source={require('./assets/image_logo.png')}
            />
        </View>
        <View style={{flex:0.70}}>
            <Text style={{textAlign:'left', justifyContent:'center', alignContent:'center', padding:4, fontSize:20, fontWeight:'bold', marginLeft:10}}> My Contact Page</Text>
        </View>
         

        <View style={{flex:0.20, textAlign:'right', alignContent:'flex-end', marginRight:-40}}>
            <Image
                style={{ width: 40, height: 40,  borderRadius: 20}}
                source={require('./assets/image_logo.png')}
            />
        </View>
      </View>
    );
  }
*/