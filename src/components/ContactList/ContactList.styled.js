import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  padding-top: 8px;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #2e2e2e;
`;

export const ListItem = styled.li`
  padding: 8px 5px;
  &:nth-child(2n-1) {
    background-color: #eeeeee;
  }
`;
