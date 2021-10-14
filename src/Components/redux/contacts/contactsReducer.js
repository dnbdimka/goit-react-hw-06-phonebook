import { combineReducers } from "redux";
import { ADDCONTACT, REMOVECONTACT, FILTER } from "./contactsTypes";

const contactsListReducer = (
  state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  { type, payload }
) => {
  switch (type) {
    case ADDCONTACT:
      return [...state, payload];
    case REMOVECONTACT:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const contactsFilterReduser = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: contactsFilterReduser,
});
export default contactsReducer;
