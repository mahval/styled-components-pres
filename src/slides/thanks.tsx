import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledDiv = styled.div`
  animation: ${spin} 2s 0.5s ease-out both;
  font-size: 3em;
`;

export const Thanks = () => <StyledDiv>Takk for meg</StyledDiv>;
