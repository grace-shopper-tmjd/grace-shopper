import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// import user from './user'
import rootReducer from '../reducers/index'

// const reducer = combineReducers({user})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
// const store = createStore(reducer, middleware)

const store = createStore(rootReducer, middleware)

export default store
// export * from './user'
