import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  Button,
} from 'react-native';
const width = 390;
const height = 188;

const images = [
  'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/17/683412-670727-648440-veere-di-wedding-poster-crop.jpg',
  'https://epcms.epicon.in/featured-images/1625823143-aatma-thumbnailbanner-1-580x380.jpg',
  'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8284/388284-h',
  'https://www.socialsamosa.com/wp-content/uploads/2020/02/5-4.png',
  'https://www.india.com/wp-content/uploads/2018/10/pjimage-13-7.jpg',
];

export default class Carousel extends React.Component {
  state = {
    activeColor: 0,
  };
  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.activeColor) {
      this.setState({activeColor: slide});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{width, height}}>
          {images.map((image, index) => (
            <Image key={index} source={{uri: image}} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.dotting}>
          {images.map((x, y) => (
            <Text
              key={y}
              style={
                y == this.state.activeColor
                  ? styles.dotcolor
                  : styles.Activedotcolor
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    borderRadius:30,
    marginVertical:20,
    width,
    height,
  },
  image: {
    borderRadius:30,
    width,
    height,
    // resizeMode:'cover',
  },
  dotting: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dotting1: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    height: 10,
    width: 10,
  },

  dotcolor: {
    color: '#888',
    margin: 3.5,
  },
  Activedotcolor: {
    color: '#fff',
    margin: 3.5,
  },
});
