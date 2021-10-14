import React from "react";
import { connect } from "react-redux";
import { filteredContacts } from "../redux/contacts/contactsActions";

const Filter = ({ onFilterInput }) => {
  const onFilterInputChange = (e) => {
    const { value } = e.target;

    onFilterInput(value);
  };

  return (
    <label>
      Find contacts by name:
      <input type="text" onChange={onFilterInputChange} />
    </label>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFilterInput: (query) => dispatch(filteredContacts(query)),
});

export default connect(null, mapDispatchToProps)(Filter);
