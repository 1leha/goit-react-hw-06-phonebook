import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  inputFilterReducer,
  clearFilterReducer,
} from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

// icons
import { TiDelete } from 'react-icons/ti';

//components
import { Box } from '../Box';
import { LabelStyled, InputStyled, ButtonStyled } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  // Filter methods
  const handleChangeFilter = e => {
    dispatch(inputFilterReducer(e.currentTarget.value));
  };

  const clearFilter = () => {
    dispatch(clearFilterReducer());
  };

  return (
    <Box mb="4">
      <LabelStyled htmlFor="filter">Find contacts by name</LabelStyled>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="2"
      >
        <InputStyled
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={handleChangeFilter}
        />

        <ButtonStyled
          type="button"
          aria-label="Clear filter"
          onClick={clearFilter}
        >
          <TiDelete size="36" />
        </ButtonStyled>
      </Box>
    </Box>
  );
};

export default Filter;
