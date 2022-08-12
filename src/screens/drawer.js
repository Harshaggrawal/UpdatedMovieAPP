import React  from 'react';
// import * as RootNavigation from "../routes/RootNavigation";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';


const Drawerdesign = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity>
          <ImageBackground
            source={{
              uri: 'https://img.freepik.com/free-photo/sunset-landscape_1417-1820.jpg?t=st=1657898826~exp=1657899426~hmac=67dd6d1cbece52495904c4bd6b37adcfa5ecc6652472c67928a46c8081d9c27a&w=1060',
            }}
            style={styles.imageBack}>
            <View>
              <Text style={styles.textStyle}>welcome</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // textAlign:"center",

  imageBack: {
    padding: 20,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
});

export default Drawerdesign;
