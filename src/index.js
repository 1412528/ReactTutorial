import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {rootReducer} from './store/reducer/rootReducer';
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import cfgFirebase from './config/cfgFirebase';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(cfgFirebase, {attachAuthIsReady : true}),
        reduxFirestore(cfgFirebase)
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render( 
        <Provider store={store}>
            <App />
        </Provider>,
         document.getElementById('root')
    );
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
