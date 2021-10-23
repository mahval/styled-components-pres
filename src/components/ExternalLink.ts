import styled from 'styled-components/macro';

export const ExternalLink = styled.a.attrs({ target: '_blank' })`
  color: white;
  transition: 0.3s;
  display: inline-block;
  &:hover {
    transform: scale(1.1);
  }
`;
