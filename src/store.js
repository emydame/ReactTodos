import {createStore, combineReducer} from 'redux';

const reducers={};

const rootReducers=combineReducer( reducers);

export const configureStore = () =>createStore(rootReducers);