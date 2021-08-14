import { createAction } from '@reduxjs/toolkit';
import {IContact} from '../../interfaces/Contact.interface';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction<IContact[]>('contacts/fetchContactsSuccess');
const fetchContactsError = createAction<string, 'contacts/fetchContactsError'>('contacts/fetchContactsError');

 const addContactRequest = createAction('contacts/addContactRequest');
 const addContactSuccess = createAction<IContact, 'contacts/addContactSuccess'>('contacts/addContactSuccess');
 const addContactError = createAction<string, 'contacts/addContactError'>('contacts/addContactError');

 const deleteContactRequest = createAction('contacts/deleteContactRequest');
 const deleteContactSuccess = createAction<string, 'contacts/deleteContactSuccess'>('contacts/deleteContactSuccess');
 const deleteContactError = createAction<string, 'contacts/deleteContactError'>('contacts/deleteContactError');

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
