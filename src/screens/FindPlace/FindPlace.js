import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

    static navigatorStyle = {
        navBarButtonColor: "orange"
    }

    state = {
        placesLoaded: false,
        removeAnim: new Animated.Value(0.99),
        placesAnim: new Animated.Value(0)
    }

    //listening to the navigator event to know when side drawer button is clicked
    constructor(props) { 
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") { //type of event from console.log
            if (event.id === "sideDrawerToggle"){ //id to the button given in startMainTabs.js
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => { //finding the name of the place from given key from redux store available 
            return place.key === key;
        })

        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {// will be passed as props to the PlaceDetailScreen
                selectedPlace: selPlace
            }
        });

    }

    //Animating the fading in of the places
    placesLoadedHandler = () => {
        Animated.timing(this.state.placesAnim, {
            toValue: 1,
            duration: 500, 
            useNativeDriver: true
        }).start();
    }
    //animating the Find Places button
    placesSearchHandler = () => {
        Animated.timing(this.state.removeAnim,{
            toValue: 0,
            duration: 500, //500 ms
            useNativeDriver: true
        }).start(
            ()=>{
                this.setState({
                    placesLoaded: true
                });
                this.placesLoadedHandler();
            });
    }

    render(){
        let content = (
            <Animated.View 
            style={{
                //removeAnim is not a number but a animated property
                opacity: this.state.removeAnim, //button start opaque and end at transparent
                transform: [
                    {
                        //making the button bigger
                        scale: this.state.removeAnim.interpolate({
                            inputRange: [0, 0.99],
                            outputRange: [12, 0.99]
                        })
                    }
                ]
            }}>
                <TouchableOpacity onPress={this.placesSearchHandler}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>

        );
        if (this.state.placesLoaded) { //if you have places, don't show the button
            content = (
                <Animated.View 
                style={{
                    opacity: this.state.placesAnim
                }}>
                    <PlaceList 
                    places={this.props.places}
                    onItemSelected={this.itemSelectedHandler}
                    />
                </Animated.View>
            );
        }
        return(
            <View 
            style={
                this.state.placesLoaded 
                ? null 
                : styles.buttonContainer}
            >
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: "orange",
        borderWidth: 3,
        borderRadius: 50,
        padding: 20
    },
    searchButtonText: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 26
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places
/*      first .places=places reducer,
        second .places reaches out to places array in the initialState in there
 */    
    }
}
export default connect(mapStateToProps)(FindPlaceScreen);