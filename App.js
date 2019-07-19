//Start the app, register screen and start navigation for the app

import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';

import configureStore from './src/store/configureStore';


const store = configureStore();

//Register Screens. appName.screenName. should be connected to Redux
//all screens get Redux Store
Navigation.registerComponent(
  "awesome-places.AuthScreen", 
   () => AuthScreen,
   store,
   Provider);

Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
   ()=>SharePlaceScreen,
   store,
   Provider);

Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
   ()=>FindPlaceScreen,
   store,
   Provider);

Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  ()=>PlaceDetailScreen
);

//Start a App
Navigation.startSingleScreenApp({
  screen:{
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});