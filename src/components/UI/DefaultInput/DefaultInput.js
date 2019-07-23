import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const defaultInput = props => (
    <TextInput 
    style={styles.input} 
    underlineColorAndroid="transparent"
    {...props} //makes defaultInput behave more like TextInput without explicitly pulling out the props
    />

);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8
    }
});

export default defaultInput;