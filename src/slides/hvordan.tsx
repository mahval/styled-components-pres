import React from 'react';
import { Code } from '../components/code';
import { Step } from '../components/slide/step';
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
