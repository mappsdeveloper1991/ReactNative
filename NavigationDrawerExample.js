
import React, {Component} from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import homePage from './NavigationHomePage';
import aboutPage from './NavigationAboutPage';
import contactPage from './NavigationContactUsPage';

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 28, height: 28, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}


// There are only single page(Home) in stack and this page will item of Side/drawer menu
function HomePageWithStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={homePage}
          options={{
            title: 'Home', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />, //left drawer menu icon from cust component
            headerStyle: {
              backgroundColor: '#0E7AD5', //Set Header background color
            },
            headerTintColor: '#fff', //Set Header text & icon  color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text font & style
            },
          }}
        />
      </Stack.Navigator>
  );
}



// Silde/Drawer Menu items(About), About page will inital root page and contat page/others page will like stack
function AboutPageWithStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />, //left drawer menu icon from cust component
        headerStyle: {
          backgroundColor: '#0E7AD5', //Set Header background color
        },
        headerTintColor: '#fff', //Set Header text & icon color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text font & style
        }
      }}>
      <Stack.Screen
        name="About"
        component={aboutPage}
        options={{
          title: 'About', //Set Header Title
        }}/>
      <Stack.Screen
        name="Contact"
        component={contactPage}
        options={{
          title: 'Contact', //Set Header Title
        }}/>
    </Stack.Navigator>
  );
}




export default class NavigationDrawerExample extends Component{
    render(){
        return(
            <NavigationContainer 
               >
              <Drawer.Navigator  
                drawerContentOptions={{
                  activeTintColor: '#0E7AD5',
                  itemStyle: { marginVertical: 5 },
                }}>
                <Drawer.Screen  name='Home' component={HomePageWithStack}  /> 
                <Drawer.Screen  name='About' component={AboutPageWithStack}/> 
                <Drawer.Screen  name='Contact' component={contactPage}/> 
              </Drawer.Navigator>=
            </NavigationContainer>

        );
    }
}































/*



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import homePage from './NavigationHomePage';
import aboutPage from './NavigationAboutPage';
import contactPage from './NavigationContactUsPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}


// There are only single page(Home) in stack and this page will item of Side/drawer menu
function HomePageWithStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={homePage}
          options={{
            title: 'Home', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />, //left drawer menu icon from cust component
            headerStyle: {
              backgroundColor: '#0E7AD5', //Set Header background color
            },
            headerTintColor: '#fff', //Set Header text & icon  color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text font & style
            },
          }}
        />
      </Stack.Navigator>
  );
}



// Silde/Drawer Menu items(About), About page will inital root page and contat page/others page will like stack
function AboutPageWithStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />, //left drawer menu icon from cust component
        headerStyle: {
          backgroundColor: '#0E7AD5', //Set Header background color
        },
        headerTintColor: '#fff', //Set Header text & icon color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text font & style
        }
      }}>
      <Stack.Screen
        name="About"
        component={aboutPage}
        options={{
          title: 'About', //Set Header Title
        }}/>
      <Stack.Screen
        name="Contact"
        component={contactPage}
        options={{
          title: 'Contact', //Set Header Title
        }}/>
    </Stack.Navigator>
  );
}



export default class NavigationDrawerExample extends Component{
    render(){
        return(
            //// for nav drwader label
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContentOptions={{
                        activeTintColor: '#0E7AD5',
                        itemStyle: { marginVertical: 5 },
                    }}>
                    <Drawer.Screen
                        name="Home" 
                        options={{ drawerLabel: 'Home' }}
                        component={HomePageWithStack} />
                    <Drawer.Screen
                        name="About" 
                        options={{ drawerLabel: 'About' }}
                        component={AboutPageWithStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}





















import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

import homePage from './NavigationHomePage';
import aboutPage from './NavigationAboutPage';
import contactPage from './NavigationContactUsPage';


const DrawerMenu = createDrawerNavigator();
const StackMenu = createStackNavigator();



  function CustomDrawerMenu(props) {
    return (
            <DrawerMenu.Navigator 
                drawerStyle={{
                    backgroundColor: '#c6cbef',
                    width: 210,
                    }}
                    drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                    }}
                    screenOptions={{
                        headerLeft: (
                         <View style={{ padding: 15, paddingLeft: 10 }}>
                           <Icon name="home" color='red' size={24} />
                         </View>
                       )
                    }}
            >
                <DrawerMenu.Screen name="Home" component={homePage} />
                <DrawerMenu.Screen name="About" component={aboutPage} />
                <DrawerMenu.Screen name="contact" component={contactPage} />
            </DrawerMenu.Navigator>
    )
}


export default class NavigationDrawerExample extends Component{
    render(){
        return(
           /* <NavigationContainer >
               <StackMenu.Navigator  
               >
               <StackMenu.Screen name='Menu' component={CustomDrawerMenu}/>
               </StackMenu.Navigator>
            </NavigationContainer>
            );
        }
    }


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