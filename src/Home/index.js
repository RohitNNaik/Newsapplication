
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  TouchableHighlight,
  Image,
  Platform
} from 'react-native';

import Home from '../Components/home';
import Details from '../Components/detail';



export default createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerTitleStyle: {
            alignSelf: 'center', 
            textAlign: 'center', 
            fontSize: 18, 
            color:'white',
            width: Platform.OS == 'ios' ? '75%' : '90%',    
        },
        headerStyle: {
          backgroundColor: 'black'
        },
      }),
    },
    Details: {
        screen:Details,
        navigationOptions: ({ navigation }) => ({
            title: 'Details',
            headerTitleStyle: {
                alignSelf: 'center', 
                textAlign: 'center', 
                fontSize: 18,
                color:'white',
                width: Platform.OS == 'ios' ? '75%' : '90%',
            },
            headerStyle: {
              backgroundColor: 'Black'
            },
          }),
    }
  });