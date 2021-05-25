import { contactsOperations } from '../redux/contacts';

import Section from '../components/Section';
import ContactsPageWrapper from '../components/contacts/ContactsPageWrapper';
import ContactForm from '../components/contacts/ContactForm';
import ContactList from '../components/contacts/ContactsList';
import { useAppDispatch } from '../redux/hooks';
import { useEffect } from 'react';

export default function Contacts() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchContacts = () => dispatch<any>(contactsOperations.fetchContacts());
    fetchContacts();
  }, [dispatch]);

  return (
      <>
        <Section>
          <ContactsPageWrapper>
            <ContactList />
            <ContactForm />
          </ContactsPageWrapper>
        </Section>
      </>
    );
};


