import { useSelector } from 'react-redux';
import { ContactsList } from '../ContactList';
import { Filter } from '../Filter';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <div>
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? <ContactsList /> : null}
    </div>
  );
};
