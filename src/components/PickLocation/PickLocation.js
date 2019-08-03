import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

class PickLocation extends Component {
    state = {
        focusedLocation: {
            latitude: 37.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get('window').width /
                            Dimensions.get('window').height * 0.0122
        },
        locationChosen: false
    }
    //handler to change the lat/lon touched on map
    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        //to animate the map movement
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        })
        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            };
        });
    }
    render(){
        let marker = null;
        
        if(this.state.locationChosen){
            marker = <MapView.Marker coordinate={this.state.focusedLocation} />
        }
        
        return(
            <View style={styles.container}>
                <MapView
                //initialRegion is only for the first time load
                initialRegion={this.state.focusedLocation}
                style={styles.map}
                onPress={this.pickLocationHandler}
                //creating a reference to MapView, for use in animation
                ref={ref => this.map = ref}
                >
                    {marker}
                </MapView>

                <View style={styles.button}>
                    <Button title="Locate Me" onPress={()=>alert("Locate Me!")}/>
                </View>

            </View>            
        );
    }
}
    
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
        width: "100%",
        height: 250

    },
    button: {
        margin: 8
    }
})

export default PickLocation;



