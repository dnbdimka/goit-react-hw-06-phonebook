import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addNewContact,
  removeContactById,
} from "../redux/contacts/contactsActions";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { ContactsFilterAndListWrapper } from "./AppStyled";

const App = ({ contacts, filter, onAddNewContact, removeContactById }) => {
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  return (
    <div>
      <ContactForm onAddNewContact={onAddNewContact} />
      <ContactsFilterAndListWrapper>
        {contacts.length !== 0 && <Filter filter={filter} />}

        <ContactList
          contacts={contacts}
          filterValue={filter}
          removeContactById={removeContactById}
        />
      </ContactsFilterAndListWrapper>
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
