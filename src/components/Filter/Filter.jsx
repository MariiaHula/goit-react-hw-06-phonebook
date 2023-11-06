import React from 'react';
import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filter/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <FilterInput
      name="filter"
      type="text"
      value={filter}
      onChange={handleChangeFilter}
      placeholder="Find contact by name"
    />
  );
};

export default Filter;
