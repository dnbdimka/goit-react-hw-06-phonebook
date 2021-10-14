import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";

// {
//     contacts: {
//           items: [{}, {}, ...],
//           filter: ''
//   }
// }

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
