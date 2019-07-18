//Start the app, register screen and start navigation for the app

import {Navigation} from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

//Register Screens. appName.screenName
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);


//Start a App
Navigation.startSingleScreenApp({
  screen:{
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});