import Link from 'next/link';

import { ListItemContainer } from './styled';

interface Props {
  href: string;
  title: string;
}

function ListItem({ href, title }: Props) {
  return (
    <ListItemContainer>
      <Link href={href}>{title}</Link>
    </ListItemContainer>
  );
}

export default ListItem;
