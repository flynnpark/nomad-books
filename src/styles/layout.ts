import styled from 'styled-components';

import { MAX_WIDTH } from '~/constants';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${MAX_WIDTH}px;
  margin: 50px auto;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  margin-bottom: 1em;
`;
