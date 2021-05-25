import axios from 'axios';
import {INewContact} from '../../interfaces/Contact.interface';
import contactsActions from './contacts-actions';
import { TAppDispatch } from '../store';

const { fetchContactsRequest,
  fetchContactsSuccess,
   fetchContactsError,
   addContactRequest,
   addContactSuccess,
   addContactError,
   deleteContactRequest,
    deleteContactSuccess,
    deleteContactError } = contactsActions;


const fetchContacts = () => async (dispatch: TAppDispatch ) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
}

const addContact = (contact: INewContact) =>  async (dispatch: TAppDispatch ) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
}

const deleteContact = (contactId: string) => async (dispatch: TAppDispatch ) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message))
  }
}

//eslint-disable-next-line 
export default { fetchContacts, addContact, deleteContact }