import {
  BookAuthor,
  BookContainer,
  BookCover,
  BookInfoContainer,
  BookTitle,
  BuyButton,
  LinkWrapper,
} from './styled';

interface Props {
  author: string;
  coverUrl: string;
  purchaseUrl: string;
  title: string;
}

function Book({ author, coverUrl, purchaseUrl, title }: Props) {
  return (
    <BookContainer>
      <BookCover alt={title} src={coverUrl} />
      <BookInfoContainer>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <LinkWrapper>
          <BuyButton href={purchaseUrl} target="_blank">
            Buy now
          </BuyButton>
        </LinkWrapper>
      </BookInfoContainer>
    </BookContainer>
  );
}

export default Book;
