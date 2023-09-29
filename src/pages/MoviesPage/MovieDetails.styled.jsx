import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled.button`
  display: block;

  background-color: transparent;
  cursor: pointer;
  border: 3px solid #ddd;
  border-radius: 5px;
  color: #060606;
  font-weight: 600;
  transform: scale(1);
  transition: scale 250ms linear, border 250ms linear;

  &:hover {
    border: 3px solid orange;
    transform: scale(1.05);
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardTitle = styled.h2`
  font-weight: 800;
  font-size: 28px;
`;

export const AddInfo = styled.p`
  font-size: 26px;
  font-weight: 600;
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: #060606;
  font-size: 20px;
  border: 3px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  transition: border 250ms linear;

  &:hover {
    border: 3px solid orange;
  }
`;

export const FetchError = styled.p`
  color: red;
  font-size: 20px;
`;
