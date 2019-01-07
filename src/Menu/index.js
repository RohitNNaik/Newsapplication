import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator,createAppContainer  } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';



import RootStack from '../Home';
import Home from '../Components/home';
import NewsEditor from '../NewsEditor';


const styles = {
    height: 35,
    width: 35,
  };
  
  const Main = createBottomTabNavigator(
    {
        RootStack: {
        screen: RootStack,
        activeTintColor:'blue',
        navigationOptions: () => ({
          tabBarIcon: () => (
            <Icon name="home" size={20}/>
          ),
        }),
      },
       Favourite: {
         screen: Home,
         navigationOptions: () => ({
           tabBarIcon: () => (
            <Icon name="heart" size={20}/>
           ),
         }),
       },
      NewsEditor: {
        screen: NewsEditor,
        navigationOptions: () => ({
          header: {
            visible: true,
          },
          tabBarIcon: () => (
            <Icon name="plus" size={20}/>
          ),
        }),
      },
    },
    {
      navigationOptions: {
        header: {
          visible: true,
        },
      },
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'red',
       inactiveTintColor: 'gray',
        showIcon: true,
        style: {
          backgroundColor: '#FFF',
        },
        scrollEnabled: true,
      },
      initialRouteName: 'RootStack',
      animationEnabled: false,
      swipeEnabled: false,
    },
  );

  
  
  export default Main;