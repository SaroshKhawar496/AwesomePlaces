
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';


export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  }
  
  placeAddedHandler = (placeName) => {

    this.setState(prevState => {
      return {
        //key below is needed to be used in FlatList in PlaceList
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          image: {
            uri: "https://vacationidea.com/pix/img25Hy8R/articles/most-beautiful-places-in-the-world_t5.jpg"

          }
        
        })
      }
    })
  }
  placeDeletedHandler = () => {
    this.setState(prevState => {
    return {
      places: prevState.places.filter(place => {
        return place.key !== prevState.selectedPlace.key; //if the index of item is not == to passed index, which you want to delete
      }),
      selectedPlace: null
    }
  });

  }
  modalClosedHandler = () => {
    this.setState({
        selectedPlace: null
    });
  }

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });

  }

  
  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.state.selectedPlace} 
        onItemDeleted={this.placeDeletedHandler} 
        onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
        places={this.state.places} 
        onItemSelected={this.placeSelectedHandler}/>
      
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
  