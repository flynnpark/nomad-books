import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

import { getBookListDetail } from '~/api';
import Book from '~/components/Book';
import { PageTitle } from '~/styles/layout';

import { BooksContainer } from './styled';

const getQueryKey = (name: string) => ['bookLists', { name }];

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const name = params?.name as string;

  await queryClient.prefetchQuery(getQueryKey(name), () =>
    getBookListDetail(name)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function BookList() {
  const router = useRouter();
  const name = router.query?.name as string;
  const { data } = useQuery({
    queryFn: () => getBookListDetail(name),
    queryKey: getQueryKey(name),
  });

  return (
    <>
      <PageTitle>{data?.results.display_name}</PageTitle>
      <BooksContainer>
        {data?.results.books.map((book) => (
          <Book
            author={book.author}
            coverUrl={book.book_image}
            key={book.primary_isbn13}
            purchaseUrl={book.amazon_product_url}
            title={book.title}
          />
        ))}
      </BooksContainer>
    </>
  );
}

export default BookList;
