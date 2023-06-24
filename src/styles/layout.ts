import styled from 'styled-components';

import { MAX_WIDTH } from '~/constants';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${MAX_WIDTH}px;
  margin: auto;
`;
