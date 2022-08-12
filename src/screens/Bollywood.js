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
  Alert,
} from 'react-native';
import {
  addToFavourite,
  addToWatchLater,
  loadBollywood,
  addtoLiked,
} from '../action';
import Carousel from './carousel';

const image = {
  uri: 'https://img.freepik.com/free-vector/shining-bokeh-overlay-background_1409-778.jpg?size=626&ext=jpg&ga=GA1.2.1930299761.1657899141',
};

class Bollywood extends React.Component {
  state;

  loadBollywood = () => {
    this.props.dispatchLoadBollywood(this.state);
  };

  addToFav = Movie => {
    this.props.dispatchFavourites(Movie);
  };
  addtoLiked = Movie => {
    this.props.dispatchLiked(Movie);
  };

  addToWatchLater = Movie => {
    this.props.dispatchWatchLater(Movie);
  };

  details = (Movie) => {
    //console.log(id);
    this.props.navigation.navigate('Details', { Movies: Movie });
}
  render() {
    const {Movies} = this.props;

    return (
      <ImageBackground
        style={styles.container}
        source={image}
        resizeMode="cover"
        blurRadius={1}>
        <Carousel />
        <ScrollView style={styles.BooksContainer}>
          {Movies.map((Movie, index) => (
            <View style={styles.book} key={index}>
              <TouchableOpacity onPress={() => { this.details(Movie) }}>
              <Image style={styles.Image} source={{uri: Movie.imgUrl}} />
              </TouchableOpacity>

              <View style={styles.content}>
                <Text style={styles.Moviename}>{Movie.name}</Text>
                <Text>{Movie.genre}</Text>
                <Text>{Movie.releaseYear}</Text>
                <View style={styles.iconView}>
                  <TouchableOpacity
                    style={styles.iconbtn}
                    onPress={() => {
                      this.addToFav(Movie);
                    }}>
                    <Text style={styles.btntext}>+ Favourites</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconbtn}
                    onPress={() => {
                      this.addToWatchLater(Movie);
                    }}>
                    <Text style={styles.btntext}>+ watchLater</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={{alignSelf:'flex-start'}}
                onPress={() => {
                  this.addtoLiked(Movie);
                }}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/heart-icon.png',
                  }}
                />
              </TouchableOpacity>
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
  btntext:{
    fontWeight:'bold'
  },
  iconbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 50,
    marginHorizontal:5,
    backgroundColor: 'red',
    padding:5,
    borderRadius:10
  },
  iconView: {
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
  dispatchFavourites: Movie => addToFavourite(Movie),
  dispatchLiked: Movie => addtoLiked(Movie),
  dispatchWatchLater: Movie => addToWatchLater(Movie),
  dispatchLoadBollywood: Movie => loadBollywood(Movie),
};

const mapStateToProps = state => ({
  Movies: state.MovieReducer.Movies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Bollywood);
