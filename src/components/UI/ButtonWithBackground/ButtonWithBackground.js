import React from 'react';
import {
    TouchableOpacity, 
    //component below works only on android
    TouchableNativeFeedback,
     Text,
    View,
    StyleSheet,
    //Platform API will help detect which platform app is running on
    Platform
    } from 'react-native';

const buttonWithBackground = props => {
        const content = (
        <View style={[styles.button, {backgroundColor: props.color}, 
            props.disabled ? styles.disabled : null]}>
            <Text style={props.disabled ? styles.disabledText : null}>{props.children}</Text>
        </View>

    );
    if (props.disabled){
        return content;
    }
    if (Platform.OS === 'android'){
        return(
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        );
    }
    //not on android
    return(
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"
    },
    disabled: {
        backgroundColor: '#eee',
        borderColor: "#aaa"
    },
    disabledText: {
        color: "#aaa"
    }
})

export default buttonWithBackground;