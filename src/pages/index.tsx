import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';

import { getBookLists } from '~/api';
import ListItem from '~/components/ListsItem';

import { ListsContainer, PageWrapper } from './styled';

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

  return (
    <PageWrapper>
      <h1>The New York Times Best Seller Explorer</h1>
      <ListsContainer>
        {data?.results.map((item) => (
          <ListItem
            href={`/book-lists/${item.list_name_encoded}`}
            key={item.list_name}
            title={item.display_name}
          />
        ))}
      </ListsContainer>
    </PageWrapper>
  );
}
