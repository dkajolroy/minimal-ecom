import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { loginReducer, registerReducer, userProfileReducer } from './Reducer/UserReducer'
import { getAllProductReducer, viewProductReducer } from './Reducer/ProductReducer'

const Reducer = combineReducers({
    signUp: registerReducer,
    signIn: loginReducer,
    allProduct: getAllProductReducer,
    profile: userProfileReducer,
    viewProduct: viewProductReducer
})
const getUser = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
const InitState = {
    signIn: { loginInfo: getUser || {} }
}

const store = legacy_createStore(Reducer, InitState, composeWithDevTools(applyMiddleware(thunk)))
export default store