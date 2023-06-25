import styled from 'styled-components';

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 32px;
`;
