import React from 'react';
import { Code } from '../components/Code';
import { Step } from '../components/Slide/Step';
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
