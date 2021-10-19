import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

import homePage from './NavigationHomePage';
import aboutPage from './NavigationAboutPage';
import contactPage from './NavigationContactUsPage';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();


function LogoTitle() {
  return (
    <View >
      <Image
          style={{ width: 50, height: 50 }}
          source={require('./assets/image_logo.png')}
        />
    </View>
  );
}

function HomeStackScreen() {
    return (
      <HomeStack.Navigator >
        <HomeStack.Screen name="Home" component={homePage} />
        <HomeStack.Screen name="Contact" component={contactPage} />
      </HomeStack.Navigator>
    );
  }

//Create by Cody Info & Abhishek rai on 27 Jun 21 at 4PM
export default class NavigationMaterialButtomTabBarExample extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator initialRouteName='About' activeColor='tomato' inactiveColor='gray' barStyle={{ paddingBottom: 10, backgroundColor: 'white', elevation:10 }} >
                    <Tab.Screen name='Home' component={HomeStackScreen} 
                        options = {{
                            tabBarLabel: 'My Home',
                            tabBarIcon: ({color}) => ( <Icon name="home" color={color} size={24} /> ),
                        }}
                    />
                    <Tab.Screen name='About' component={aboutPage} 
                        options = {{
                            tabBarLabel: 'About',
                            tabBarIcon: ({color}) => ( <Icon name="person" color={color} size={24} /> ),
                        }}
                    />
                    <Tab.Screen name='Contact' component={contactPage} 
                        options = {{
                            tabBarLabel: 'Contact',
                            tabBarIcon: ({color}) => ( <Icon name="phone" color={color} size={24} /> ),
                            tabBarBadge: 11,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}















