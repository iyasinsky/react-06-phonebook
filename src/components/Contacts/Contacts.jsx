import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const Contacts = ({ contacts, value, onChange, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <Filter value={value} onChange={onChange} />
      {contacts.length ? (
        <ContactsList contacts={contacts} onDelete={onDelete} />
      ) : null}
    </div>
  );
};
