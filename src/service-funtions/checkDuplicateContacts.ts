import { toast } from 'react-toastify';
import { INewContact } from '../interfaces/Contact.interface';
import { IContact } from '../interfaces/Contact.interface';



export const checkDuplicateContacts = (newContact: INewContact, existedContacts: IContact[]) => {
    const isDuplicateNumber = existedContacts.find(
      ({ number }) => number === newContact.number,
    );
    const isDuplicateName = existedContacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isDuplicateNumber) {
      toast.error('This number is already in contacts.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return true;
    }

    if (isDuplicateName) {
      toast.error(`${isDuplicateName.name} is already in contacts.`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return true;
    }
  };