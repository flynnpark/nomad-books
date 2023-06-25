import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookCover = styled.img`
  max-width: 100%;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookTitle = styled.h1`
  margin-top: 16px;
  font-size: 16px;
`;

export const BookAuthor = styled.span`
  margin-top: 8px;
  font-size: 12px;
`;

export const LinkWrapper = styled.div`
  margin-top: 16px;
`;

export const BuyButton = styled.a`
  border: 1px solid;
  padding: 4px;
`;
