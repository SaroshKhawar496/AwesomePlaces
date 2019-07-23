import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const defaultInput = props => (
    <TextInput 
    underlineColorAndroid="transparent"
    {...props} /* makes defaultInput behave more like TextInput 
    without explicitly pulling out the props. */
    style={[styles.input, props.style]} //merging the styles using array. default and props one.
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