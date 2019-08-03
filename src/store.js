import {createStore, applyMiddleware} from 'redux';
import {weather} from './reducers/weatherFunction';
import {logger} from 'redux-logger'
export const createstore=()=>createStore(weather,applyMiddleware(logger));