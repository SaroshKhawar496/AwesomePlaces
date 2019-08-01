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

import {connect} from 'react-redux';
import {tryAuth} from '../../store/actions/index'

import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from "../../assets/background.jpg";

import validate from '../../utility/validation';

class AuthScreen extends Component{
    //state to manage change in device orientation
    state = {
        authMode: 'login',
        viewMode: Dimensions.get("window").height > 500 ? "portrait": "landscape",
        
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password : {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false

            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: 'password'
                },
                touched: false
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
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === "login" ? "signup" : "login"
            };
        });
    }
    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait": "landscape"
        });
    }

    loginHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        }
        this.props.onLogin(authData);
        startMainTabs();
    }
    
    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;

            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        if (key === 'password'){
            connectedValue = {
                ...connectedValue,
                equalTo: value
            };

        }
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: key === 'password' ? validate(prevState.controls.confirmPassword.value, 
                            prevState.controls.confirmPassword.validationRules, connectedValue) : 
                            prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                        touched: true //user typed in the field
                    },

                }
            };
        })
    }

    render(){
        let headingText = null;
        let confirmPasswordControl = null;
        
        if (this.state.viewMode === 'portrait') {
            headingText = (                
            <MainText>
                <HeadingText>Please Login</HeadingText>
            </MainText>
            )
        }
        if (this.state.authMode === "signup") {
            confirmPasswordControl = (
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
                    valid={this.state.controls.confirmPassword.valid}
                    touched={this.state.controls.confirmPassword.touched}
                    secureTextEntry //will hide the password
                  />
                </View>
            );

        }
        return(
            <ImageBackground 
            source={backgroundImage} 
            style={styles.backgroundImage}>

            <View style ={styles.container}>
                
                {headingText}
                    <ButtonWithBackground 
                    color="#29aaf4" 
                    onPress={this.switchAuthModeHandler}
                    >Switch to {this.state.authMode === "login" ? "Sign Up" : "Login"}</ButtonWithBackground>
 
                    <View style={styles.inputContainer}>
                        {/* passing style as props below to DefaultInput will override the style in DefaultInput */}
                        <DefaultInput 
                        placeholder="Your Email Address"  
                        style={styles.input}
                        value={this.state.controls.email.value}
                        onChangeText={(val)=> this.updateInputState('email', val)}
                        valid={this.state.controls.email.valid}
                        touched={this.state.controls.email.touched}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType='email-address'
                        />
                        
                        {/* aligning password fields on same row if device rotated */}
                        <View 
                        style={
                            this.state.viewMode === "portrait" || this.state.authMode === "login"
                            ? styles.portraitPasswordContainer
                            : styles.landscapePasswordContainer
                        }>   

                            <View 
                            style={
                                this.state.viewMode === "portrait" || this.state.authMode === "login"
                                ? styles.portraitPasswordWrapper
                                : styles.landscapePasswordWrapper
                            }>
                                <DefaultInput 
                                placeholder="Password"  
                                style={styles.input}
                                value={this.state.controls.password.value}
                                onChangeText={(val)=> this.updateInputState('password', val)}                                        
                                valid={this.state.controls.password.valid}
                                touched={this.state.controls.password.touched}
                                secureTextEntry //will hide the password
                                />
                            </View> 
                            {confirmPasswordControl}                           
                        </View>
                    </View>

                    <ButtonWithBackground 
                    color="#29aaf4" 
                    onPress={this.loginHandler}
                    disabled={ //if any of the fields is not valid then disabled = true
                    !this.state.controls.email.valid ||
                    !this.state.controls.password.valid ||
                    !this.state.controls.confirmPassword.valid && this.state.authMode === "signup"
                }
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

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch (tryAuth(authData))
    };
}

export default connect(null, mapDispatchToProps)(AuthScreen);