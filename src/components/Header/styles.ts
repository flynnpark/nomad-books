import styled from 'styled-components';

import { MAX_WIDTH } from '~/constants';

export const Navigator = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const MenuContainer = styled.div`
  display: flex;
  max-width: ${MAX_WIDTH}px;
  margin: auto;
`;

export const MenuItems = styled.ul`
  display: flex;
  font-size: 20px;
`;

export const MenuItem = styled.li`
  position: relative;
  font-weight: 500;
  :not([hidden]) ~ :not([hidden]) {
    margin-left: 20px;
  }
`;
