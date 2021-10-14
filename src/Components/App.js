import React from "react";
import { connect } from "react-redux";
import {
  addNewContact,
  removeContactById,
} from "./redux/contacts/contactsActions";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

const App = ({ contacts, filter, onAddNewContact, removeContactById }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={onAddNewContact} />

      <h2>Contacts</h2>
      {contacts.length !== 0 && <Filter filter={filter} />}

      <ContactList
        contacts={contacts}
        filterValue={filter}
        removeContactById={removeContactById}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onAddNewContact: (contact) => dispatch(addNewContact(contact)),
  removeContactById: (id) => dispatch(removeContactById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
