import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

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
    render(){
        return(
            <View>
                <PlaceList 
                places={this.props.places}
                onItemSelected={this.itemSelectedHandler}
                />
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        places: state.places.places
/*      first .places=places reducer,
        second .places reaches out to places array in the initialState in there
 */    
    }
}
export default connect(mapStateToProps)(FindPlaceScreen);