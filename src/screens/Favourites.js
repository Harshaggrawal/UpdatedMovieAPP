import React from "react";
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
import { removeFav } from "../action";
const image = {
    uri: 'https://img.freepik.com/free-vector/shining-bokeh-overlay-background_1409-778.jpg?size=626&ext=jpg&ga=GA1.2.1930299761.1657899141',
  };
  

class Fav_Movies extends React.Component{

    removeFav=(favoritesMovie)=>{
      this.props.dispatchRemoveFav(favoritesMovie)
    }


    render(){
        const {favoritesMovies} =this.props;
        console.log(favoritesMovies);
        return(
            <ImageBackground
        style={styles.container}
        source={image}
        resizeMode="cover"
        blurRadius={1}>
        <ScrollView style={styles.BooksContainer}>
          {favoritesMovies.map((favoritesMovie, index) => (
            <View style={styles.book} key={index}>
              <Image style={styles.Image} source={{uri:favoritesMovie.imgUrl}} />
              <View style={styles.content}>
                <Text style={styles.Moviename}>{favoritesMovie.name}</Text>
                <Text>{favoritesMovie.genre}</Text>
                <Text>{favoritesMovie.releaseYear}</Text>
                
            
            
                  <TouchableOpacity
                    style={styles.iconbtn}
                    onPress={() => {
                      this.removeFav(favoritesMovie);
                    }}>
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
    padding:5,
    marginHorizontal: 20,
    backgroundColor: 'red',
    borderRadius:10,
  },
  btntext:{
    fontWeight:"bold"
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
    dispatchRemoveFav:(favoritesMovie)=>removeFav(favoritesMovie),
    // dispatchFavourites:(favoritesMovies)=>addToFavourite(favoritesMovies),
  };
  
  const mapStateToProps = state => ({
    favoritesMovies: state.MovieReducer.favoritesMovies,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Fav_Movies);