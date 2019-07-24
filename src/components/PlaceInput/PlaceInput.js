import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

class PlaceInput extends Component {

    state = {
        placeName: ""    
      }
      
      placeNameChangeHandler = (val) => {
        this.setState({
          placeName: val
        });
      }
     
    render(){
        return (      
          // 2 way bounded
          <DefaultInput 
          placeholder="Place Name" 
          value={this.state.placeName} 
          onChangeText={this.placeNameChangeHandler}/> 
        )

    }
}

export default PlaceInput;