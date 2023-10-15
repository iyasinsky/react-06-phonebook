import styled from 'styled-components';
import { Form } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  gap: 15px;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    width: 250px;
    padding: 5px 10px;
  }

  p {
    color: red;
    text-align: end;
  }

  button {
    padding: 5px 10px;
  }
`;
