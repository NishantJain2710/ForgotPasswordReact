import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {userForgotPaswordReducer} from './reducers/userReducer'

const reducer = combineReducers({
    userForgotPasword:userForgotPaswordReducer
})

const middleware = [thunk]

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store