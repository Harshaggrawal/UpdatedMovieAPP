import 'react-native-gesture-handler';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Drawerdesign from '../screens/drawer';

import Home from './Home';
import WatchLater from '../screens/WatchLater';
import Fav_Movies from '../screens/Favourites';
import Liked_Movies from '../screens/Liked';
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <Drawerdesign {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'grey',
        drawerActiveTintColor: 'blue',
        drawerInactiveTintColor: 'black',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="WatchLater" component={WatchLater} />
      <Drawer.Screen name="Favourites" component={Fav_Movies} />
      <Drawer.Screen name='Liked' component={Liked_Movies} />

      {/* <Drawer.Screen name="" component={Manageusers} /> */}

      {/* <Drawer.Screen name="" */}
    </Drawer.Navigator>
  );
};

export default AppStack;
