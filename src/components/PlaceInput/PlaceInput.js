import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

class PlaceInput extends Component {

    state = {
        placeName: ""    
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
        this.props.onPlaceAdded(this.state.placeName);
      }
      
    render(){
        return (
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
        )

    }
}
const styles = StyleSheet.create({
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
      }  
});

export default PlaceInput;