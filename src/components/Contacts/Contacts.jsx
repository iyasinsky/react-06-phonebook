import { useSelector } from 'react-redux';
import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  return (
    <div>
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? <ContactsList /> : null}
    </div>
  );
};
