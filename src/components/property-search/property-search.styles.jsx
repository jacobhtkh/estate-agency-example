import styled, { css } from 'styled-components';

const ResponsiveSearchInputStyles = css`
  @media screen and (max-width: 1039px) {
    font-size: 16px;
  }

  @media screen and (max-width: 886px) {
    font-size: 14px;
  }

  @media screen and (max-width: 730px) {
    font-size: 12px;
  }
`;

const ResponsiveFilterAndSearchStyles = css`
  @media screen and (max-width: 663px) {
    width: 12%;
  }
`;

export const PropertySearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 100px;
  width: 75%;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 10px;

  @media screen and (max-width: 925px) {
    width: 90%;
  }
`;

export const PropertySearchForm = styled.form`
  display: flex;
  flex: 1;
  justify-content: center;
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

  ${ResponsiveSearchInputStyles}

  @media screen and (max-width: 810px) {
    width: 12%;
  }

  @media screen and (max-width: 663px) {
    width: 16%;
  }

  @media screen and (max-width: 663px) {
    width: 23%;
  }
`;

export const PropertySearchInput = styled.input`
  width: 50%;
  background-color: white;
  font-size: 20px;
  font-family: 'avenir';
  font-weight: bold;
  padding: 10px;
  border: 1px solid transparent;
  :focus {
    outline: 0;
    background-color: #eeeeee;
  }
  ${ResponsiveSearchInputStyles}
`;

export const FiltersButton = styled.button`
  color: white;
  background-color: #a8a8a8;
  width: 15%;
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
  ${ResponsiveSearchInputStyles}
  ${ResponsiveFilterAndSearchStyles}
`;

export const SearchButton = styled.button`
  color: white;
  background-color: #858585;
  width: 15%;
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
    box-shadow: 0 0 3px #ddd;
  }
  ${ResponsiveSearchInputStyles}
  ${ResponsiveFilterAndSearchStyles}
`;

export const Icon = styled.span`
  margin-right: 8px;
`;

export const IconText = styled.span`
  @media screen and (max-width: 663px) {
    display: none;
  }
`;
