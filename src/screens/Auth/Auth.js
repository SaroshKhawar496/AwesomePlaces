import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

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
                    <TextInput placeholder="Your Email Address" style={styles.input}/>
                    <TextInput placeholder="Password" style={styles.input}/>
                    <TextInput placeholder="Confirm Password" style={styles.input}/>
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
    input: {
        width: "100%"
    },
    inputContainer: {
        width: "80%"
    }
})

export default AuthScreen;