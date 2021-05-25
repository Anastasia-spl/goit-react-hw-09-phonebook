import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import  contactsActions  from './contacts-actions'; 
const { fetchContactsRequest,
  fetchContactsSuccess,
   fetchContactsError,
   addContactRequest,
   addContactSuccess,
   addContactError,
   deleteContactRequest,
    deleteContactSuccess,
  deleteContactError,
filterContact} = contactsActions;

const items = createReducer([], {
  [fetchContactsSuccess.type]: (_, { payload }) => payload,
  [addContactSuccess.type]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess.type] : (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest.type]: () => true,
  [addContactRequest.type]: () => true,
  [deleteContactRequest.type]: () => true,
  [fetchContactsSuccess.type]: () => false,
  [addContactSuccess.type]: () => false,
  [deleteContactSuccess.type]: () => false,
  [fetchContactsError.type]: () => false,
  [addContactError.type]: () => false,
  [deleteContactError.type]: () => false, 
});

const error = createReducer(null, {
  [fetchContactsError.type]: (_, { payload }) => payload,
  [addContactError.type]: (_, { payload }) => payload,
  [deleteContactError.type]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error
});
  

// const itemsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// ];


// {
//     "id": "id-1",
//     "name": "Rosie Simpson",
//     "number": "459-12-56"
//   },
//   {
//     "id": "id-2",
//     "name": "Hermione Kline",
//     "number": "443-89-12"
//   },
//   {
//     "id": "id-3",
//     "name": "Eden Clements",
//     "number": "645-17-79"
//   }


