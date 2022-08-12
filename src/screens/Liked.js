import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import { addToWatchLater } from "../action";
import {removeLiked} from '../action';
const image = {
  uri: 'https://img.freepik.com/free-vector/shining-bokeh-overlay-background_1409-778.jpg?size=626&ext=jpg&ga=GA1.2.1930299761.1657899141',
};

class Liked_Movies extends React.Component {
    removeLiked=(LikedMovie)=>{
        this.props.dispatchRemoveLiked(LikedMovie)
      }

  render() {
    const {LikedMovies} = this.props;
    console.log(LikedMovies);
    return (
      <ImageBackground
        style={styles.container}
        source={image}
        resizeMode="cover"
        blurRadius={1}>
        <ScrollView style={styles.BooksContainer}>
          {LikedMovies.map((LikedMovie, index) => (
            <View style={styles.book} key={index}>
              <Image style={styles.Image} source={{uri: LikedMovie.imgUrl}} />
              <View style={styles.content}>
                <Text style={styles.Moviename}>{LikedMovie.name}</Text>
                <Text>{LikedMovie.genre}</Text>
                <Text>{LikedMovie.releaseYear}</Text>
                <TouchableOpacity
                onPress={() => {
                    this.removeLiked(LikedMovie);
                  }}
                    style={styles.iconbtn}
                    >
                    <Text style={styles.btntext}>Remove</Text>
                  </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  iconbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 50,
    borderRadius:10,
    padding:5,
    marginHorizontal: 20,
    backgroundColor: 'red',
  },
  btntext:{
    fontWeight:'bold'
  },
  iconView: {
    flex: 1,
    // justifyContent:'space-evenly',
    flexDirection: 'row',
  },
  content: {
    marginHorizontal: 10,
  },
  icon: {
    // marginHorizontal:50,
    width: 20,
    height: 20,
  },
  BooksContainer: {
    width: '100%',
    flex: 1,
  },
  book: {
    // width:'70%',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
  Moviename: {
    fontSize: 23,
  },
  Image: {
    borderRadius: 30,
    resizeMode: 'cover',
    width: 100,
    height: 100,
  },
});

const mapDispatchToProps = {
    dispatchRemoveLiked:(LikedMovie)=>removeLiked(LikedMovie),
};

const mapStateToProps = state => ({
  LikedMovies: state.MovieReducer.LikedMovies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Liked_Movies);
