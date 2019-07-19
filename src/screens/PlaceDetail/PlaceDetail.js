import React, {Component} from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deletePlace} from '../../store/actions/index';
import Icon from 'react-native-vector-icons/Ionicons';

class PlaceDetail extends Component{
    placeDeletedHandler = () => {
        //selectedPlace is the props provided by outer component calling
        //this screen.
        this.props.onDeletePlace(this.props.selectedPlace.key);
        //going back a screen after deleting. navigating back
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
    
            <View>        
                <TouchableOpacity onPress={this.placeDeletedHandler}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name="ios-trash" color="red"/>
                    </View>
                </TouchableOpacity>
            </View> 
            </View>
        )
    }

};
    
    const styles = StyleSheet.create ({
        container: {
            margin: 22
        },
        placeImage: {
            width: "100%",
            height: 200
        },
        placeName: {
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 28
        },
        deleteButton: {
            alignItems: "center"
        }
    })
    
    const mapDisptachToProps = dispatch => {
        return {
            //to delete the item and go back to main screen. 
            //key of item to be deleted should be provided
            onDeletePlace: (key) => dispatch(deletePlace(key))
        };
    }

    export default connect(null, mapDisptachToProps)(PlaceDetail);