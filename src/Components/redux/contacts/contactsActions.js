import { ADDCONTACT, REMOVECONTACT, FILTER } from "./contactsTypes";

const addNewContact = (contact) => ({
  type: ADDCONTACT,
  payload: contact,
});

const removeContactById = (id) => ({
  type: REMOVECONTACT,
  payload: id,
});

const filteredContacts = (query) => ({
  type: FILTER,
  payload: query,
});
export { addNewContact, removeContactById, filteredContacts };
