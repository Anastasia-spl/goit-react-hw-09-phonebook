import { createSelector } from '@reduxjs/toolkit';
import {IContact} from '../../interfaces/Contact.interface';
import { TRootState } from '../store';

type TSelector<R> = (state: TRootState) => R;

const getContacts: TSelector<IContact[] | []> = state => state.contacts.items;
const getFilter:TSelector<string>  = state => state.contacts.filter;
const getLoader: TSelector<boolean> = state => state.contacts.loading;
const getIsError: TSelector<null | string> = state => state.contacts.error;

const getFilteredContacts = createSelector([getFilter, getContacts],
  (filter, contacts) =>
    filter !== ''
      ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
      )
      : contacts);


//eslint-disable-next-line 
export default { getContacts, getFilter, getFilteredContacts, getLoader, getIsError }