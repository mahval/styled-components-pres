import React from 'react';
import { Style } from '../styled-components';
import { Button, WarningButton } from './example-styled-components';

export const ExampleProps = () => (
  <Style>
    <h1>Eksempel på bruk av props</h1>
    <Button>Knapp</Button>
    <Button primary>Hovedknapp</Button>
    <WarningButton>Advarselknapp</WarningButton>
  </Style>
);
