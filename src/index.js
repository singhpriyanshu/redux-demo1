import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer';
import Reducer2 from './Reducer2';

const mainReducer=combineReducers({
    name: Reducer,
    wish:Reducer2
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer,{name:"name from store",wish:["hope","sad"]},composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();