import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

export const middlewares = [logger];

const composedEnhancers = ( applyMiddleware(...middlewares),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(
  rootReducer,
  composedEnhancers
 
);

export default store;
