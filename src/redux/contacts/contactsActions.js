import { createAction } from "@reduxjs/toolkit";

// import { ADDCONTACT, REMOVECONTACT, FILTER } from "./contactsTypes";

// const addNewContact = (contact) => ({
//   type: ADDCONTACT,
//   payload: contact,
// });

const addNewContact = createAction("contacts/addContact");

// const removeContactById = (id) => ({
//   type: REMOVECONTACT,
//   payload: id,
// });

const removeContactById = createAction("contacts/removeContact");

// const filteredContacts = (query) => ({
//   type: FILTER,
//   payload: query,
// });

const filteredContacts = createAction("contacts/filteredContacts");

export { addNewContact, removeContactById, filteredContacts };
