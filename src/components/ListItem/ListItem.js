import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const listItem = (props) => (
    //TouchableWithoutFeedback allows us to register touch event w/o feedback
    // only one child element to be allowed inside it
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    listItem:{
        width: "100%",
        margin: 5,
        paddingBottom: 10,
        backgroundColor: "#eee"
    }
})

export default listItem;