import { useDispatch } from 'react-redux';
import { contactsOperations } from '../redux/contacts';
import Section from '../components/Section';
import ContactsPageWrapper from '../components/contacts/ContactsPageWrapper';
import ContactForm from '../components/contacts/ContactForm';
import ContactList from '../components/contacts/ContactsList';
import { useEffect } from 'react';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContacts = () => dispatch(contactsOperations.fetchContacts());
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


