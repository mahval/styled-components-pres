import * as React from 'react';
import styled from 'styled-components/macro';
import { ExternalLink } from '../components/ExternalLink';
import logo from './img/logo.png';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin-bottom: 1rem;
  }
  height: 80%;
`;

const StyledImg = styled.img`
  margin: 5vh 0;
  background-color: white;
`;

export const Velkommen = () => (
  <Style>
    <h1>Styling av react-componenter</h1>
    <h2>CSS in JS</h2>
    <StyledImg src={logo} alt="Styled Components logo" />
    <ExternalLink href="https://github.com/styled-components/styled-components">
      https://github.com/styled-components/styled-components
    </ExternalLink>
  </Style>
);
