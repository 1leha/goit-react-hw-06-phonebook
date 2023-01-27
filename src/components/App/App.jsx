// Redux
import { useDispatch, useSelector } from 'react-redux';
import { clearAllContactReducer } from '../../redux/contactsSlice';
import { clearFilterReducer } from '../../redux/filterSlice';
import { getContacts } from '../../redux/selectors';
import { useFilteredContacts } from '../hooks/useFilteredContacts';

// icons
import { AiOutlineClear } from 'react-icons/ai';

// settings
import { message } from '../settings';

// components
import { Box } from '../Box';
import Section from '../Section';
import PhonebookEditor from '../PhonebookEditor';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Notification from '../Notification';
import {
  AppStyled,
  AppTitleStyled,
  ClearButtonStyled,
  VersionStyled,
} from './App.styled';

// App
export const App = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const filteredContacts = useFilteredContacts();

  const { isEmptyBook, noMatches } = message;

  const isPhonebookEmpty = contacts.length === 0;
  const isFilteredContactsEmpty = filteredContacts.length === 0;

  const clearAllContact = () => {
    dispatch(clearAllContactReducer());
    dispatch(clearFilterReducer());
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize="l"
      color="primary"
    >
      <Box position="relative">
        <AppTitleStyled>My phonebook</AppTitleStyled>
        <VersionStyled>Redux. Redux-persist.</VersionStyled>
      </Box>

      <AppStyled>
        <Section title="Contacts editor">
          <PhonebookEditor />
        </Section>

        <Section title="Contacts">
          <ClearButtonStyled
            type="button"
            aria-label="Clear all contacts"
            disabled={isPhonebookEmpty}
            onClick={clearAllContact}
          >
            <AiOutlineClear size="30" />
          </ClearButtonStyled>

          {isPhonebookEmpty ? (
            <Notification message={isEmptyBook} />
          ) : (
            <>
              <Filter />

              {isFilteredContactsEmpty ? (
                <Notification message={noMatches} />
              ) : (
                <ContactList />
              )}
            </>
          )}
        </Section>
      </AppStyled>
    </Box>
  );
};
