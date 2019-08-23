import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes'

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {      
        case ADD_PLACE:
            //always return a brand new state
            return {
                ...state, //copying old state
                            //key below is needed to be used in FlatList in PlaceList
            places: state.places.concat({
                key: Math.random(), 
                name: action.placeName,
                image: {
                uri: action.image.uri             
                },
                location: action.location            
            })
            };  
            case DELETE_PLACE:
                return{
                    ...state,                    
                    places: state.places.filter(place => {
                        return place.key !== action.placeKey; //if the index of item is not == to passed index, which you want to delete
                    })
                  
            };       
        default:
            return state;
    }
};

export default reducer;