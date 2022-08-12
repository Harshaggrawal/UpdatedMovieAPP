import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Details({route}) {
  const {Movies} = route.params;
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: Movies.imgUrl}}></Image>
      <View style={styles.about}>
        <Text style={styles.textHeading}>Description</Text>
        <Text style={styles.text}>{Movies.overview}</Text>
        <Text style={styles.text}>Released: {Movies.releaseYear}</Text>
        <Text style={styles.text}>Runtime: {Movies.runtime}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textHeading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    borderBottomWidth: 2,
  },
  about: {
    padding: 10,
  },
  image: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: '100%',
    height: 450,
  },
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBootom: 20,
    fontSize: 20,
    textAlign: 'center',
  },

  BooksContainer: {
    borderWidth: 1,
    borderTopColor: 'red',
    flex: 1,
    backgroundColor: 'black',
  },
  imageStyle: {
    width: 25,
    height: 25,
  },
  imageBackStyle: {
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 10,
  },

  book: {
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 2,
    backgroundColor: 'grey',
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    color: 'White',
    marginRight: 10,
    fontStyle: 'bold',
  },
  details: {
    fontSize: 14,
    color: 'white',
    fontStyle: 'italic',
  },
});
