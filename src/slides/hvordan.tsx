import React from 'react';
import { Step } from '../components/Slide/Step';
import { Code } from '../components/code';
import { Style } from './styled-components';

export const Hvordan = () => (
  <Style>
    <Step>
      <h1>Hvordan?</h1>
    </Step>
    <Step>
      <Code>
        npm i styled-components
        <br />
        npm i @types/styled-components
      </Code>
    </Step>
  </Style>
);
