import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export const useFilteredContacts = () => {
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterNormalized = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterNormalized)
  );

  return filteredContacts;
};
