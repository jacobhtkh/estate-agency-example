import styled from 'styled-components';

export const PropertySearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 100px;
  width: 75%;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 10px;
`;

export const PropertySearchForm = styled.form`
  flex: 1;
`;

export const PropertyOptionsDropdown = styled.select`
  width: 10%;
  color: white;
  background-color: #858585;
  font-size: 20px;
  font-family: 'avenir';
  font-weight: bold;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  :hover {
    background-color: #6b6b6b;
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`;

export const PropertySearchInput = styled.input`
  width: 62%;
  background-color: white;
  font-size: 20px;
  font-family: 'avenir';
  font-weight: bold;
  padding: 10px;
  border: 1px solid transparent;
  :focus {
    outline: none;
    background-color: #eeeeee;
  }
`;

export const FiltersButton = styled.button`
  color: white;
  background-color: #a8a8a8;
  width: 16%;
  padding: 10px;
  font-size: 20px;
  font-family: 'avenir';
  font-weight: bold;
  border: 1px solid transparent;
  :hover {
    background-color: #c4c4c4;
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`;

export const SearchButton = styled.button`
  color: white;
  background-color: #858585;
  width: 16%;
  padding: 10px;
  font-size: 20px;
  font-family: 'avenir';
  font-weight: bold;
  border: 1px solid transparent;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  :hover {
    background-color: #6b6b6b;
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`;

export const Icon = styled.span`
  margin-right: 8px;
`;
