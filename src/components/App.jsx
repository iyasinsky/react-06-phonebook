import { GlobalStyle } from 'helpers/GlobalStyle';
import { ContactForm } from './ContactForm';
import { Contacts } from './Contacts';

export const App = () => (
  <section>
    <ContactForm />
    <Contacts />
    <GlobalStyle />
  </section>
);
