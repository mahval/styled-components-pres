import React from 'react';
import styled from 'styled-components/macro';
import { style } from '../../utils/style';
import { Style } from '../styled-components';

export const ExampleStyling = () => (
  <Style>
    <h1>Eksempel på styling og extension</h1>
    <ColoredButton primaryColor="green" secondaryColor="lightgreen">
      Grønn knapp
    </ColoredButton>
    <ColoredButton primaryColor="red" secondaryColor="pink">
      Rød knapp
    </ColoredButton>
    <ColoredButton primaryColor="purple" secondaryColor="violet">
      Lilla knapp
    </ColoredButton>
  </Style>
);

const Button = styled.button`
  background: none;
  border: 2px solid ${style.color.text};
  padding: 10px;
  cursor: pointer;
  font-size: 1em;
  color: ${style.color.text};
  margin: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px lightyellow;
  &:hover {
    background-color: lightyellow;
  }
`;

interface ColoredButtonProps {
  primaryColor: string;
  secondaryColor: 'lightgreen' | 'pink' | 'violet';
}

const ColoredButton = styled(Button)<ColoredButtonProps>`
  color: ${(props) => props.primaryColor};
  border-color: ${(props) => props.primaryColor};
  box-shadow: ${(props) => `4px 4px 4px ${props.secondaryColor}`};
  &:hover {
    background-color: ${(props) => props.secondaryColor};
  }
`;
