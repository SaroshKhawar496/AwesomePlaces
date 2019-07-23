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
                <TextInput placeholder="Your Email Address"/>
                <TextInput placeholder="Password"/>
                <TextInput placeholder="Confirm Password"/>

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
    }
})

export default AuthScreen;