import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { object, string } from 'yup';
import 'yup-phone-lite';

import { FormikForm } from './ContactForm.styled';

const contactSchema = object().shape({
  name: string().required('Required field!'),
  number: string()
    .phone('UA', 'Please enter a Ukrainian phone number')
    .required('Required field!'),
});

export const ContactForm = ({ onSaveContact }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          onSaveContact({ id: nanoid(), ...values });
          actions.resetForm();
        }}
      >
        <FormikForm>
          <label>
            <div>
              <span>Name</span>
              <Field name="name" placeholder="Enter name" />
            </div>
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            <div>
              <span>Number</span>
              <Field name="number" placeholder="Enter UA phone number" />
            </div>
            <ErrorMessage name="number" component="p" />
          </label>
          <button type="submit">Add new contact</button>
        </FormikForm>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onSaveContact: PropTypes.func.isRequired,
};
