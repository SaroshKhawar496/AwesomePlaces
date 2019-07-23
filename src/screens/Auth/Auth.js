import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class AuthScreen extends Component{
    loginHandler = () => {
        startMainTabs();
    }

    render(){
        return(
            <View style ={styles.container}>
                <Text>Please Log In</Text>
                <Button title="Switch to Login"/>
                <View style={styles.inputContainer}>
                    {/* passing style as props below to DefaultInput will override the style in DefaultInput */}
                    <DefaultInput placeholder="Your Email Address"  style={styles.input}/>
                    <DefaultInput placeholder="Password"  style={styles.input}/>
                    <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                </View>
                <Button title="Submit" onPress={this.loginHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //makes the container take the whole page
        //justifyContent aligns items across main axis of flexbox [default direction is column]
        justifyContent: "center",
        //alignItems aligns on the cross axis [horizontal]
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    }, 
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }
});

export default AuthScreen;