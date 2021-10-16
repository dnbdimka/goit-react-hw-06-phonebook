import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addNewContact,
  removeContactById,
  filteredContacts,
} from "./contactsActions";
// import { ADDCONTACT, REMOVECONTACT, FILTER } from "./contactsTypes";

const contactsListReducer = createReducer(
  JSON.parse(localStorage.getItem("contacts")) || [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [addNewContact]: (state, { payload }) => {
      if (
        state.some((contact) =>
          contact.name.toLowerCase().includes(payload.name.toLowerCase())
        )
      ) {
        alert(`${payload.name} is already in contacts.`);
        return;
      }
      return [...state, payload];
    },
    [removeContactById]: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
  }
);

// const contactsListReducer = (
//   state = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case ADDCONTACT:
//       return [...state, payload];
//     case REMOVECONTACT:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const contactsFilterReducer = createReducer("", {
  [filteredContacts]: (_, { payload }) => payload,
});

// const contactsFilterReduser = (state = "", { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: contactsFilterReducer,
});
export default contactsReducer;
