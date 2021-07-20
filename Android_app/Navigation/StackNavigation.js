import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import ChangePass from '../Screens/ChangePass';
import MyProfile from '../Screens/MyProfile';
import Policy from '../Screens/Policy' ;

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  // colors: {
  //   ...DefaultTheme.colors,
  //   primary: '#007bff',
  //   secondary: '#f50057',
  //   background: 'rgb(242, 242, 242)',
  //   card: 'rgb(255, 255, 255)',
  //   text: '#0079b2',
  //   border: 'rgb(199, 199, 204)',
  //   notification: 'rgb(255, 69, 58)',
  // },
  // headingText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '00695c',
  // },

  // input_field: {
  //   primary: '#007bff',
  // },
};

class StackNavigation extends Component {
  state = {
    initalpage:"Home",
    is_check:"false",
    screen_map :[
      {"name" :"Home" , "component":Home ,"title":"Home"},
      {"name" :"Register" , "component":Register ,"title":"Register"},
      {"name": "Login" , "component": Login , "title": "Login"},
      {"name": "ChangePass" ,"component": ChangePass , "title": "Change Password"},
      {"name": "MyProfile" ,"component": MyProfile , "title": "Profile"},
      {"name": "Policy" ,"component": Policy , "title": "About us"},

    ]
  };
  render() {
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName={this.state.initalpage}>
       {this.state.screen_map.map((data) =>(
       
            <Stack.Screen
              key = {data.name}
              name={data.name}
              component={data.component}
              
              options={{
                title: `${data.title}`,
                headerStyle: {
                  backgroundColor: '#007bff',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  backgroundColor: '#007bff',
                },
              }}
          />
      )
       )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigation;
