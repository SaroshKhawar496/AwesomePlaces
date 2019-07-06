import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import ListItem from "../ListItem/ListItem"

const placeList = (props) => {
        //converting the array places to array of jsx elements for rendering


    return (
        <FlatList //best way to output list which is too long. performance optimised
        style={styles.listContainer} 
        data={props.places}
        renderItem={(info) => (//info is the item to be rendered at the instance
            <ListItem 
            placeName={info.item.value} //value & key property is coming from App.js
            onItemPressed={()=> props.onItemDeleted(info.item.key)}/>
        )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})
export default placeList;