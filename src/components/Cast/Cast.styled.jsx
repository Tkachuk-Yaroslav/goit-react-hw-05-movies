import styled from 'styled-components';

export const CastList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* gap: 20px; */
  list-style: none;
`;

export const ListItem = styled.li`
  width: calc((100% - 72px) / 4);

  & + & {
    margin-left: 24px;
  }

  &:nth-child(4n + 1) {
    margin: 0;
  }

  margin-bottom: 8px;
`;

export const ImgItem = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 30px;
`;

export const DivWrap = styled.div`
  border: 1px dashed orange;
  border-radius: 30px;
`;
