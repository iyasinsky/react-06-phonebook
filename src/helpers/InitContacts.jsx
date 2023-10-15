import { getLocalStorageData } from './LocalStorageData';
import { contactsTemplate } from './ContactsTemplate';

export const initContacts = () => getLocalStorageData() ?? contactsTemplate;
