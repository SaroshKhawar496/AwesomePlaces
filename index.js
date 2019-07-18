/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'; //Provider connects to store and wraps the App Component
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
//RNRedux has to be a function that returns JSX to be used below instead of App.
AppRegistry.registerComponent(appName, () => RNRedux);
