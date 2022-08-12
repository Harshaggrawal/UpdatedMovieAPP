import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bollywood from '../screens/Bollywood';
import Hollywood from '../screens/Hollywood';
import { StyleSheet,Image } from "react-native";
const tab = createBottomTabNavigator();

export default function Home() {
  return (
    <tab.Navigator>
      <tab.Screen
        name="Bollywood"
        component={Bollywood}
        options={{
          tabBarIcon: ()=>(
            <Image style={styles.icon} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm16XPlhCClodBFtW_gyqsR-xRyYJ8DYbY2g&usqp=CAU'}} />
          ),
          headerShown: false,
        }}
      />
      <tab.Screen
        name="Hollywood"
        component={Hollywood}
        options={{
          tabBarIcon: ()=>(
            <Image style={styles.icon} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iktcBQB8v8gxFXUgSR97h2eWFEkpLlxRFA&usqp=CAU'}} />
          ),
          headerShown: false,
        }}
      />
    </tab.Navigator>
  );
}

const styles=StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
})
