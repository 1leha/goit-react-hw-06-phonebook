import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addContactReducer } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

// formik
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

// settings
import { initialValue, validationString, message } from '../settings';

// components
import Notification from '../Notification';
import { Box } from '../Box';
import {
  LabelStyled,
  FieldStyled,
  ButtonStyled,
  ButtonIconStyled,
} from './PhonebookEditor.styled';

const validationShema = yup.object().shape({
  name: yup
    .string()
    .matches(validationString.name, message.wrongInput)
    .required(message.isRequired),
  phone: yup
    .string()
    .matches(validationString.phone, message.wrongInput)
    .required(message.isRequired),
});

const PhonebookEditor = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  const isContactExist = abonentName => {
    return contacts.find(({ name }) => name === abonentName);
  };

  const handelSubmit = ({ name, phone }, { resetForm }) => {
    if (isContactExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContactReducer({ name, phone }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handelSubmit}
      validationSchema={validationShema}
    >
      <Form>
        <Box
          display="flex"
          flexDirection="column"
          mt="4"
          backgroundColor="formBG"
          borderRadius="standart"
          p="4"
        >
          <LabelStyled htmlFor="name">Name</LabelStyled>

          <Box mb="3" display="flex" flexDirection="column">
            <FieldStyled
              name="name"
              placeholder="John Smith"
              id="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />

            <ErrorMessage name="name">
              {message => <Notification message={message} />}
            </ErrorMessage>
          </Box>

          <LabelStyled htmlFor="phone">Phone number</LabelStyled>

          <Box mb="5" display="flex" flexDirection="column">
            <FieldStyled
              name="phone"
              type="tel"
              placeholder="+00 000 0000000"
              id="phone"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />

            <ErrorMessage name="phone">
              {message => <Notification message={message} />}
            </ErrorMessage>
          </Box>

          <ButtonStyled type="submit">
            <ButtonIconStyled size="26" /> Add contact
          </ButtonStyled>
        </Box>
      </Form>
    </Formik>
  );
};

export default PhonebookEditor;
