import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #938e8e;
  padding: 0px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
`;

export const HeaderList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 25px;
`;

export const HeaderListItem = styled.li`
  /* padding: 15px;
  cursor: pointer; */
`;

export const LinkNav = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #060606;
  font-weight: 900;
  font-size: 24px;
  cursor: pointer;
  padding: 15px;
  border: 5px solid #ddd;
  border-radius: 5px;

  transition: color 250ms linear, border 250ms linear;

  &.active,
  &:hover {
    color: #676666;
    border: 5px solid orange;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #938e8e;
  padding: 0px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
`;
