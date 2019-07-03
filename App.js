/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from "./src/components/ListItem/ListItem";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: "",
    places: []
  }
  
  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === ""){
      return; //not allowing user to add empty place
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }
  
  render() {
    //converting the array places to array of jsx elements for rendering
    const placesOutput = this.state.places.map((place, i) =>(
      <ListItem key={i} placeName={place} />
    ))
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
      
        <TextInput 

        placeholder="An Awesome Place"
        value={this.state.placeName} 
        onChangeText={this.placeNameChangeHandler}
        style={styles.placeInput}
        />
        
        <Button
        title="Add"
        style={styles.placeButton}
        onPress={this.placeSubmitHandler}
        />
      
      </View>

      {/* View below is for showing the places stored in the app */}
      <View style={styles.listContainer}>
        {placesOutput}
      </View>
      
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
    },
    inputContainer: {
      // flex: 1,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    placeInput: {
      width: "70%"

    }, 
    placeButton:{
      width: "30%"
    },
    listContainer: {
      width: "100%"
    }
  });
  