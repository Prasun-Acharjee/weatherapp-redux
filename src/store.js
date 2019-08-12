import {createStore, applyMiddleware} from 'redux';
import {weatherd} from './reducers/weatherFunction';
import {logger} from 'redux-logger'
import thunk from "redux-thunk";
export const createstore=()=>createStore(weatherd,applyMiddleware(thunk,logger));