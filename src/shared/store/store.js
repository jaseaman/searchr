import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import saga from './saga'

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState: initialState
})

sagaMiddleware.run(saga)

export default Store;
