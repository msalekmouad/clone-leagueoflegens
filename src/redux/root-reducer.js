import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import championsReducer from "../redux/champions/champions.reducer";
import modalReducer from "../redux/modal/modal.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["champions","modal"]
}

const rootReducer = combineReducers({
   champions: championsReducer,
   modal: modalReducer
});

export default persistReducer(persistConfig,rootReducer);



