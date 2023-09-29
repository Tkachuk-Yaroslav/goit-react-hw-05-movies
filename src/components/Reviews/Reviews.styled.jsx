import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  border: 3px dashed orange;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;
