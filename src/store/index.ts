// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import combineReducers from './rootReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['entities'],
//   stateReconciler: autoMergeLevel2,
// };

// const pReducer = persistReducer(persistConfig, combineReducers as any);

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__?: (...args: unknown[]) => unknown;
//   }
// }
const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: combineReducers as any,
  middleware: [thunk, ...middlewares],
});

// const persist = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

// export {persist, store, RootState, AppDispatch};
export {store, type RootState, type AppDispatch};
