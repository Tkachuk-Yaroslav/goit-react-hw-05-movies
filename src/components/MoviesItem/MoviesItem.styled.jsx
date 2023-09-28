import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ItemLink = styled(NavLink)`
  display: block;
  padding: 5px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #424242;
  transition: color 250ms linear;

  &:hover {
    color: orange;
  }
`;
