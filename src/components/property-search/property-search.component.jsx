import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import {
  PropertySearchContainer,
  PropertySearchForm,
  PropertyOptionsDropdown,
  PropertySearchInput,
  FiltersButton,
  SearchButton,
  Icon,
  IconText,
} from './property-search.styles';

const PropertySearch = (props) => {
  const [propertySearch, setPropertySearch] = useState('');

  const handleChange = (event) => {
    setPropertySearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('This property was searched for ' + propertySearch);
  };

  return (
    <PropertySearchContainer>
      <PropertySearchForm onSubmit={handleSubmit}>
        <PropertyOptionsDropdown>
          <option value='Buy'>Buy</option>
          <option value='Buy'>Sell</option>
          <option value='Buy'>Rent</option>
        </PropertyOptionsDropdown>
        <PropertySearchInput
          name='property-search'
          type='text'
          placeholder='Search by town, city or postcode'
          value={propertySearch}
          onChange={handleChange}
        />
        <FiltersButton type='button'>
          <Icon>
            <FontAwesomeIcon icon={faSlidersH} />
          </Icon>
          <IconText>Filters</IconText>
        </FiltersButton>
        <SearchButton type='submit'>
          <Icon>
            <FontAwesomeIcon icon={faSearch} />
          </Icon>
          <IconText>Search</IconText>
        </SearchButton>
      </PropertySearchForm>
    </PropertySearchContainer>
  );
};

export default PropertySearch;
