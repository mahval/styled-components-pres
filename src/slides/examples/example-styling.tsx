import React from 'react';
import { Style } from '../styled-components';
import { Button, WarningButton } from './example-styled-components';

export const ExampleStyling = () => (
  <Style>
    <h1>Eksempel på styling og extension</h1>
    <Button>Knapp</Button>
    <WarningButton>Advarselknapp</WarningButton>
  </Style>
);
