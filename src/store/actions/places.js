// File for Using Async Actions .
// Couple of functions {Action-Creators} that return objects that represents actions
// Convenient for async code for handling sideaffects in handling actions

import {ADD_PLACE, DELETE_PLACE} from './actionTypes'
export const addPlace = (placeName,location,image) => {
    return {
        type: ADD_PLACE,
        placeName: placeName,
        location: location,
        image: image
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};

