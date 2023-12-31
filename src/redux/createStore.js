import { createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export const middlewares = [thunk, logger];

const composedEnhancers = ( applyMiddleware(...middlewares))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(
  rootReducer,
  composedEnhancers
 
);

export default store;
