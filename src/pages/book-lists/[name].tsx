import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

import { getBookListDetail } from '~/api';

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

  return <h1>{data?.status}</h1>;
}

export default BookList;
