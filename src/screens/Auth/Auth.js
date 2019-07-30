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
    //state to manage change in device orientation
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait": "landscape",
        
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                }
            },
            password : {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                }

            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: 'password'
                }
            }
        }
    };

    constructor(props) {
        super(props);
        //it will listen to change in dimensions eg. device rotated
        //so we can change sytles on the fly
        Dimensions.addEventListener("change", this.updateStyles);
        
    }
    //to unmount the eventlistener created above to prevent memory leaks
    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles)
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait": "landscape"
        });
    }

    loginHandler = () => {
        startMainTabs();
    }
    
    updateInputState = (key, value) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value
                    }
                }
            };
        })
    }

    render(){
        let headingText = null;
        
        if (this.state.viewMode === 'portrait') {
            headingText = (                
            <MainText>
                <HeadingText>Please Login</HeadingText>
            </MainText>
            )
        }
        return(
            <ImageBackground 
            source={backgroundImage} 
            style={styles.backgroundImage}>

            <View style ={styles.container}>
                
                {headingText}
                    <ButtonWithBackground 
                    color="#29aaf4" 
                    onPress={()=>{alert("HI")}}
                    >Switch to Login</ButtonWithBackground>

                    <View style={styles.inputContainer}>
                        {/* passing style as props below to DefaultInput will override the style in DefaultInput */}
                        <DefaultInput 
                        placeholder="Your Email Address"  
                        style={styles.input}
                        value={this.state.controls.email.value}
                        onChangeText={(val)=> this.updateInputState('email', val)}
                        />
                        
                        {/* aligning password fields on same row if device rotated */}
                        <View 
                        style={
                            this.state.viewMode === "portrait"
                            ? styles.portraitPasswordContainer
                            : styles.landscapePasswordContainer
                        }>   

                            <View 
                            style={
                                this.state.viewMode === "portrait"
                                ? styles.portraitPasswordWrapper
                                : styles.landscapePasswordWrapper
                            }>
                                <DefaultInput 
                                placeholder="Password"  
                                style={styles.input}
                                value={this.state.controls.password.value}
                                onChangeText={(val)=> this.updateInputState('password', val)}                                        
                                />
                            </View>
                            
                            <View 
                            style={
                                this.state.viewMode === "portrait"
                                ? styles.portraitPasswordWrapper
                                : styles.landscapePasswordWrapper
                            }>
                                <DefaultInput 
                                placeholder="Confirm Password" 
                                style={styles.input}
                                value={this.state.controls.confirmPassword.value}
                                onChangeText={(val)=> this.updateInputState('confirmPassword', val)}                                       
                                />
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
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }, 
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
});

export default AuthScreen;