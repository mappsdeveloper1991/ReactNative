import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import homePage from './NavigationHomePage';
import aboutPage from './NavigationAboutPage';
import contactPage from './NavigationContactUsPage';

const TAB = createBottomTabNavigator();

export default class NavigationButtomTabBarExample extends Component{
    render(){
        return(
            <NavigationContainer>
               <TAB.Navigator>
                 <TAB.Screen name="Home" component={homePage} />
                 <TAB.Screen name="About" component={aboutPage} />
                 <TAB.Screen name="contact" component={contactPage} />
                </TAB.Navigator>
            </NavigationContainer>
        );
    }
}















/*
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homePage  from './NavigationHomePage';
import aboutPage  from './NavigationAboutPage'

const Tab = createBottomTabNavigator();

export default class NavigationButtomTabBarExample extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={homePage} />
                    <Tab.Screen name="Settings" component={aboutPage} />
                </Tab.Navigator>
          </NavigationContainer>
        );
    }
}
*/