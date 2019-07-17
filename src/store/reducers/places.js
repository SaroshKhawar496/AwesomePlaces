import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {      
        case ADD_PLACE:
            //always return a brand new state
            return {
                ...state, //copying old state
                            //key below is needed to be used in FlatList in PlaceList
            places: prevState.places.concat({
                key: Math.random(), 
                name: action.placeName,
                image: {
                uri: "https://vacationidea.com/pix/img25Hy8R/articles/most-beautiful-places-in-the-world_t5.jpg"
    
                }            
            })
            };  
            case DELETE_PLACE:
                return{
                    ...state,                    
                    places: prevState.places.filter(place => {
                        return place.key !== state.selectedPlace.key; //if the index of item is not == to passed index, which you want to delete
                    }),
                    selectedPlace: null
                  
            };
            case SELECT_PLACE:
                return {
                    ...state,
                    selectedPlace: state.places.find(place => {
                        return place.key === action.placeKey;
                      })
                }; 
            case DESELECT_PLACE:
                return {
                    ...state,
                    selectedPlace: null
                }       
        default:
            return state;
    }
};

export default reducer;