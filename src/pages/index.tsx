import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';

import { getBookLists } from '~/api';

const getQueryKey = () => ['bookLists'];

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getQueryKey(), () => getBookLists());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery({
    queryFn: () => getBookLists(),
    queryKey: getQueryKey(),
  });

  return <h1>{data?.status}</h1>;
}
