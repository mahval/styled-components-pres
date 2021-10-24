import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import { Style } from '../styled-components';

export const ExampleTheme = () => (
  <Style>
    <h1>Eksempel på theme</h1>
    <ThemeProvider theme={lightTheme}>
      <Card>
        <p>Light theme</p>
      </Card>
    </ThemeProvider>
    <ThemeProvider theme={darkTheme}>
      <Card>
        <p>Dark theme</p>
      </Card>
    </ThemeProvider>
  </Style>
);

const lightTheme = {
  color: '#000',
  background: '#fff',
  border: '2px solid #000',
};
const darkTheme = {
  color: '#fff',
  background: '#000',
  border: '2px solid #fff',
};

const Card = styled.div`
  padding: 20px;
  margin: 20px 0;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
  border: ${(props) => props.theme.border};
`;
