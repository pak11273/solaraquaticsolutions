import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./rootReducer"

// redux middleware
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

// with redux-dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// OPTION: add this line to your middleware args if you want to use redux logger
// createLogger({collapsed: true}),
const store = createStore(
  rootReducer,
  // thunk middleware allows us to apply async actions
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk, promise))
)

export default store
