import { createStore, applyMiddleware } from "redux";
import { weatherReducer } from "./reducers/weatherFunction";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
export const createstore = () =>
  createStore(weatherReducer, applyMiddleware(thunk, logger));
