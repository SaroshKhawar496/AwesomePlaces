import React, {Component} from 'react';
import {
    View, 
    Text, 
    Button, 
    TextInput, 
    StyleSheet, 
    ImageBackground,
    Dimensions
} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component{
    loginHandler = () => {
        startMainTabs();
    }

    render(){
        return(
            <ImageBackground 
            source={backgroundImage} 
            style={styles.backgroundImage}>

            <View style ={styles.container}>

                    <MainText>
                        <HeadingText>Please Login</HeadingText>
                    </MainText>
                    <ButtonWithBackground 
                    color="#29aaf4" 
                    onPress={()=>{alert("HI")}}
                    >Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        {/* passing style as props below to DefaultInput will override the style in DefaultInput */}
                        <DefaultInput placeholder="Your Email Address"  style={styles.input}/>
                        
                        {/* aligning password fields on same row if device rotated */}
                        <View style={styles.passwordContainer}>   
                            <View style={styles.passwordWrapper}>
                                <DefaultInput placeholder="Password"  style={styles.input}/>
                            </View>
                            
                            <View style={styles.passwordWrapper}>
                                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                            </View>

                        </View>
                    </View>
                    <ButtonWithBackground 
                    color="#29aaf4" 
                    onPress={this.loginHandler}
                    >Submit</ButtonWithBackground>
            </View>
            </ImageBackground>
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
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    passwordContainer: {
        flexDirection: Dimensions.get("window").height > 500 ? "column" : "row",
        justifyContent: "space-between"
    }, 
    passwordWrapper: {
        width: Dimensions.get("window").height > 500 ? "100%": "45%"
    }
});

export default AuthScreen;