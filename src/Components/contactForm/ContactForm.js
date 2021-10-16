import React, { useState } from "react";
import styles from "./ContactForm.module.css";

import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "",
  number: "",
  id: "",
};

const ContactForm = ({ onAddNewContact }) => {
  const [contact, setContact] = useState(initialState);

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmitForm = (e) => {
    e.preventDefault();
    contact.id = uuidv4();

    onAddNewContact(contact);
    console.log(contact);
    setContact({ ...initialState });
  };

  return (
    <form onSubmit={handelSubmitForm}>
      <label className={styles.form_label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          value={contact.name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          value={contact.number}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddNewContact: () => dispatch(addNewContact()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
export default ContactForm;
