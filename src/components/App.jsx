import { useState, useEffect } from 'react';
import { GlobalStyle } from 'helpers/GlobalStyle';
import { setLocalStorageData } from 'helpers/LocalStorageData';
import { initContacts } from 'helpers/InitContacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => initContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setLocalStorageData(contacts);
  }, [contacts]);

  const isExist = ({ name }) => {
    const normalizedName = name.toLowerCase();

    return contacts.some(({ name }) => name.toLowerCase() === normalizedName);
  };

  const addNewContact = newContact => {
    if (isExist(newContact)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const changeFilter = e => setFilter(e.target.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  return (
    <section>
      <GlobalStyle />
      <ContactForm onSaveContact={addNewContact} />
      <Contacts
        contacts={getFilteredContacts()}
        value={filter}
        onChange={changeFilter}
        onDelete={deleteContact}
      />
    </section>
  );
};
