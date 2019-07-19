import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {addPlace} from '../../store/actions/index';

class SharePlaceScreen extends Component {
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

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render(){
        return(
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen);