import React from 'react';
import Contact from '../Contact';

import { useFilteredContacts } from '../hooks/useFilteredContacts';

const ContactList = () => {
  const filteredContacts = useFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact key={id} contactId={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
