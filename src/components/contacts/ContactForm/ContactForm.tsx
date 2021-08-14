import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUseStyles } from 'react-jss';
import { useAppSelector } from '../../../redux/hooks';
import { contactsOperations, contactsSelectors } from '../../../redux/contacts';
import TextField from '../../TextField';
import FormButton from '../../FormButton';
import { INewContact } from '../../../interfaces/Contact.interface';
import { checkDuplicateContacts } from '../../../service-funtions/checkDuplicateContacts';

const useStyles = createUseStyles({
  Form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    width: 'fitContent',
    border: '1px solid #3f51b5',
    borderRadius: '5px',
    '@media screen and (max-width: 767px)': {
      maxWidth: '300px',
    },
  },
  label: {
    marginRight: '7px',
  },
});


export default function ContactForm() {
  const dispatch = useDispatch();
const existedContacts = useAppSelector(contactsSelectors.getContacts);
  const addContact = (data: INewContact) => dispatch(contactsOperations.addContact(data));

  const [name, setName] = useState('');
  const handleChangeName = ( e: React.FormEvent<HTMLInputElement>) => {
    setName( e.currentTarget.value);
  };

  const [number, setNumber] = useState('');
  const handleChangeNumber = ( e: React.FormEvent<HTMLInputElement>) => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkDuplicateContacts({ name, number }, existedContacts)) {
      return;
    }
    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('' );
    setNumber('');
  };

  const styles = useStyles();
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChangeName}
        label="Name"
      />

      <TextField
        type="tel"
        name="number"
        value={number}
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        onChange={handleChangeNumber}
        label="Number"
      />
      <FormButton type="submit">Add contact</FormButton>
      <div>
        <ToastContainer />
      </div>
    </form>
  );
}
