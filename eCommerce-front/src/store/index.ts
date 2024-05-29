import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
 } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "./categories/categoriesSlice";
import product from "./products/productsSlice";
import Cart from "./cart/CartSlice";



const cartPersistConfig = {
  key: "Cart",
  storage,
  whiteList: ["items"]
}

const rootReducer = combineReducers({
  categories,
  product,
  Cart: persistReducer(cartPersistConfig, Cart)
});


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
