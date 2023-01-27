import React from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactReducer } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { clearFilterReducer } from '../../redux/filterSlice';

// icons
import { MdDelete } from 'react-icons/md';

// components
import { Box } from '../Box';
import { ContactButtonStyled } from './Contact.styled';

const Contact = ({ contactId, name, phone }) => {
  const dispatch = useDispatch();

  const { contacts } = useSelector(getContacts);

  const deleteContact = contactId => {
    dispatch(deleteContactReducer(contactId));

    const isPhonebookEmpty = contacts.length === 1;

    if (isPhonebookEmpty) {
      dispatch(clearFilterReducer());
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      {name}: {phone}
      <ContactButtonStyled
        type="button"
        aria-label="Delete contact"
        onClick={() => deleteContact(contactId)}
      >
        <MdDelete size="25" />
      </ContactButtonStyled>
    </Box>
  );
};

export default Contact;
