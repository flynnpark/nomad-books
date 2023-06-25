import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { MenuItem } from './styles';

interface Props extends PropsWithChildren {
  to: string;
}

function Menu({ children, to }: Props) {
  return (
    <MenuItem>
      <Link href={to}>{children}</Link>
    </MenuItem>
  );
}

export default Menu;
