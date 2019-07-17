/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'; //Provider connects to store and wraps the App Component
import App from './App';
import configureStore from './src/store/configureStore';
import {name as appName} from './app.json';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
//RNRedux has to be a function that returns JSX to be used below instead of App.
AppRegistry.registerComponent(appName, () => RNRedux);
