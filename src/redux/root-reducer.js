import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
// storage is basically bring localStroge
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './Directory/Directory.reducer'

const persistConfig = {
  key: 'root', // at which point u want to start storing the reducer
  storage,
  whitelist: ['cart'] // provide the reducers which we want to persist
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer) // now this reducer has the capability of persistance localStroage
