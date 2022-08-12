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
import { removeWatchLater } from "../action";
const image = {
    uri: 'https://img.freepik.com/free-vector/shining-bokeh-overlay-background_1409-778.jpg?size=626&ext=jpg&ga=GA1.2.1930299761.1657899141',
  };
  

class WatchLater extends React.Component{
  removeWatchLater=( watchLater)=>{
    this.props.dispatchRemoveWatchLater( watchLater)
  }

    render(){
        const {watchLater} =this.props;
        console.log(watchLater);
        return(
            <ImageBackground
        style={styles.container}
        source={image}
        resizeMode="cover"
        blurRadius={1}>
        {/* <Text>hejhej</Text> */}
        <ScrollView style={styles.BooksContainer}>
          {watchLater.map((watchlater, index) => (
            <View style={styles.book} key={index}>
              <Image style={styles.Image} source={{uri:watchlater.imgUrl}} />
              <View style={styles.content}>
                <Text style={styles.Moviename}>{watchlater.name}</Text>
                <Text>{watchlater.genre}</Text>
                <Text>{watchlater.releaseYear}</Text>
                <Text>remove</Text>
              <TouchableOpacity
                    style={styles.iconbtn}
                    onPress={() => {
                      this.removeWatchLater(watchlater);
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
  btntext:{
    fontWeight:"bold"
  },
  iconbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 50,
    padding:5,
    borderRadius:5,
    marginHorizontal: 20,
    backgroundColor: 'red',
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
  dispatchRemoveWatchLater:(watchlater)=>removeWatchLater(watchlater),
  };
  
  const mapStateToProps = state => ({
    watchLater: state.MovieReducer.watchLater,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(WatchLater);