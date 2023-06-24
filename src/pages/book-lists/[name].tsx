import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

import { getBookListDetail } from '~/api';
import Book from '~/components/Book';

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
      <h1>{data?.results.display_name}</h1>
      <div>
        {data?.results.books.map((book) => (
          <Book
            coverUrl={book.book_image}
            key={book.primary_isbn13}
            purchaseUrl={book.amazon_product_url}
            title={book.title}
          />
        ))}
      </div>
    </>
  );
}

export default BookList;
