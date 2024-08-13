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
 import wishlist from "@store/wishlist/WishlistSlice";
import storage from "redux-persist/lib/storage";
import categories from "./categories/categoriesSlice";
import product from "./products/productsSlice";
import Cart from "./cart/CartSlice";
import auth from "./auth/authSlice";
import orders from "./orders/PlaceOrderSlice";


const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "Cart"]
}

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"]
}

const cartPersistConfig = {
  key: "Cart",
  storage,
  whiteList: ["items"]
}


const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  product,
  orders,
  Cart: persistReducer(cartPersistConfig, Cart),
  wishlist: wishlist
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
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

export { store, persistor};
