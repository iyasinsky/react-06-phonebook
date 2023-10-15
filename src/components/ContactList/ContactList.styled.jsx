import styled from 'styled-components';

export const List = styled.ul`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li:not(:first-child) {
    margin-top: 10px;
  }

  button {
    padding: 5px 10px;
  }
`;
