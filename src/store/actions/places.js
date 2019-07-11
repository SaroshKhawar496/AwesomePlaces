// File for Using Async Actions .
// Couple of functions {Action-Creators} that return objects that represents actions
// Convenient for async code for handling sideaffects in handling actions

import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE,DESELECT_PLACE} from './actionTypes'
export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    };
};

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    };
};

export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    };
};
