import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { directive } from '@babel/types';

const listItem = (props) => (
    //TouchableWithoutFeedback allows us to register touch event w/o feedback
    // only one child element to be allowed inside it
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image resizeMode="cover" source={props.placeImg} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    listItem:{
        width: "100%",
        margin: 5,
        paddingBottom: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default listItem;