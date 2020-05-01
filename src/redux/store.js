import {createStore, applyMiddleware, compose} from "redux";
//import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
const middlewares = [thunk];


const initialState = {}
export const Store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));


