import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { List } from './ContactList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const normalizedFilterValue = useSelector(state =>
    state.filter.toLowerCase()
  );
  const filteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterValue)
    );

  return (
    <List>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        );
      })}
    </List>
  );
};
