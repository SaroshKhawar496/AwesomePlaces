
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  state = {
    places: []
  }
  
  placeAddedHandler = (placeName) => {

    this.setState(prevState => {
      return {
        //key below is needed to be used in FlatList in PlaceList
        places: prevState.places.concat({key: Math.random() , value: placeName})
      }
    })
  }

  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key; //if the index of item is not == to passed index, which you want to delete
        })
      }
    });
  }
  
  render() {

    return (
      <View style={styles.container}>
      
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
        places={this.state.places} 
        onItemDeleted={this.placeDeletedHandler}/>
      
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 26,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });
  