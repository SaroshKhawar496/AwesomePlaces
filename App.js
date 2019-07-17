
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {connect} from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'

class App extends Component {

  placeAddedHandler = (placeName) => {

    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();

  }
  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  
  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.props.selectedPlace} 
        onItemDeleted={this.placeDeletedHandler} 
        onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
        places={this.props.places} 
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
  
  const mapStateToProps = state => {
    return {
      /* need to return a javascript obj where we maps some keys,
      which we can access as props in our components to slices of
       our state*/
       places: state.places.places, //state->configureStore.js->places.js
       selectedPlace: state.places.selectedPlace
    };
  };
  // dispatch is passed auto by redux
  const mapDispatchToProps = dispatch => {
    return {
      // using the action creators with dispatch
      onAddPlace: (name) => dispatch(addPlace(name)),
      onDeletePlace: () => dispatch(deletePlace()),
      onSelectPlace: (key) => dispatch(selectPlace(key)),
      onDeselectPlace: () => dispatch(deselectPlace())
    };
  };

  // connected App component to redux store
  export default connect(mapStateToProps,mapDispatchToProps)(App);
  //connect is a hi-order comp that returns a fxn witch returns the App.