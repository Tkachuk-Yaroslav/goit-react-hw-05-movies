import styled from 'styled-components';

export const Form = styled.form``;

export const FormInput = styled.input`
  font-size: 28px;
  color: #060606;
  border-radius: 5px;

  &:focus {
    border: 5px solid orange;
    outline: none;
  }
`;

export const FormBtn = styled.button`
  cursor: pointer;
  font-size: 28px;
  background-color: transparent;
  border: 3px solid black;
  border-radius: 5px;
  color: #060606;
  transition: background-color 250ms linear;

  &:hover {
    background-color: orange;
    border: 3px solid orange;
  }
`;
