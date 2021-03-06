import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
`;

export const LogoAndAgencyContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  padding: 25px;
`;

export const LogoLink = styled(Link)`
  height: 25px;
  width: 25px;
`;

export const AgencyLink = styled(Link)`
  font-family: 'avenir';
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  top: 3px;
  text-decoration: none;
  :visited {
    color: black;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  position: relative;
  text-decoration: none;
  margin-right: 30px;
  top: 3px;
  cursor: pointer;
  :visited {
    color: black;
  }
  :hover {
    color: grey;
  }
`;

export const LoginContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 25px;
`;

export const LoginLink = styled(Link)`
  padding: 10px 15px;
  position: relative;
  text-decoration: none;
  top: 3px;
  cursor: pointer;
  :visited {
    color: black;
  }
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  :hover {
    border: 1px solid grey;
    color: grey;
  }
`;

export const UserIcon = styled.span`
  margin-right: 5px;
  position: relative;
  bottom: 1px;
`;
