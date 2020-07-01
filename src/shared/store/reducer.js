import {combineReducers} from "redux";
import photoReducer from '../../features/photoSearch/photos.reducers'

const appReducer = combineReducers({
    photoReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
