import { createStore, applyMiddleware } from 'redux'
// redux-persist make store to use with localStorage
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)

export {
  persistor,
  store
}
