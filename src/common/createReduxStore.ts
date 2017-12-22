import { ActionReducerMap } from '@ngrx/store';

import { modules } from '../client/app/components';

export const reducers: ActionReducerMap<any> = {
  ...modules.reducers
};

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { routerReducer } from "react-router-redux";
// import { reducer as formReducer } from "redux-form";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
//
// import modules from "../client/modules";
//
//
// export const storeReducer = combineReducers({
//   router: routerReducer,
//   form: formReducer,
//   ...modules.reducers
// });
//
// const createReduxStore = (initialState, client, routerMiddleware) => {
//   return createStore(
//     storeReducer,
//     initialState, // initial state
//     routerMiddleware ? composeWithDevTools(applyMiddleware(routerMiddleware)) : undefined
//   );
// };
//
// export default createReduxStore;
