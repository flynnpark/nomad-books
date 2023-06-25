import Link from 'next/link';

import { ListItemContainer } from './styled';

interface Props {
  href: string;
  title: string;
}

function ListItem({ href, title }: Props) {
  return (
    <Link href={href}>
      <ListItemContainer>{title}</ListItemContainer>
    </Link>
  );
}

export default ListItem;
