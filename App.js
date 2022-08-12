import 'react-native-gesture-handler';
// import { StyleSheet } from "react-native";
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers';

import AppStack from './src/navigation/appstack';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import Details from './src/screens/details';

const store = createStore(rootReducer);

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="drawerpage">
            <Stack.Screen
              name="drawerpage"
              component={AppStack}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Details"
              component={Details}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
