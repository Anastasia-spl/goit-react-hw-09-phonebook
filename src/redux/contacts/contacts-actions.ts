import { createAction } from '@reduxjs/toolkit';
import {IContact} from '../../interfaces/Contact.interface';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction<IContact[]>('contacts/fetchContactsSuccess');
const fetchContactsError = createAction<string>('contacts/fetchContactsError');

 const addContactRequest = createAction('contacts/addContactRequest');
 const addContactSuccess = createAction<IContact>('contacts/addContactSuccess');
 const addContactError = createAction<string>('contacts/addContactError');

 const deleteContactRequest = createAction('contacts/deleteContactRequest');
 const deleteContactSuccess = createAction<string>('contacts/deleteContactSuccess');
 const deleteContactError = createAction<string>('contacts/deleteContactError');

 const filterContact = createAction<string, 'contacts/filterContact'>('contacts/filterContact');
 // eslint-disable-next-line
export default {
  fetchContactsRequest,
  fetchContactsSuccess, 
  fetchContactsError, 
  addContactRequest, 
  addContactSuccess, 
  addContactError, 
  deleteContactRequest, 
  deleteContactSuccess, 
  deleteContactError, 
  filterContact
};
