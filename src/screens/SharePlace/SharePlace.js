import React, {Component} from 'react';
import {
    View, 
    Text,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import {connect} from 'react-redux';

import {addPlace} from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';




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
            <ScrollView>
                <View style={styles.container}>
                    
                    <MainText>
                        <HeadingText>
                            Share a Place with us!
                        </HeadingText>
                    </MainText>

                    <PickImage />     
                    <PickLocation />  
                    
                    <PlaceInput />                    
                    <View style={styles.button}>                    
                        <Button title="Share the Place!"/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150

    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})

export default connect(null, mapDispatchToProps)(SharePlaceScreen);