import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-weight: 300;
  white-space: nowrap;
  border: 1px solid black;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  border-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    color: white;
    border-color: #357ae8;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border-color: black;

  &:hover {
    background-color: black;
    color: white;
    border-color: black;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
