import React from 'react';
import styled from 'styled-components/macro';
import { ExternalLink } from '../components/externalLink';
import { Step } from '../components/slide/step';
import { Style } from './styled-components';

const OverflødigStyling = styled.span`
  filter: blur(5px);
`;

const Points = styled.div`
  max-width: 80%;
  li {
    margin-bottom: 20px;
  }
`;

export const Summary = () => (
  <Style>
    <Step>
      <h1>Oppsummering</h1>
      <ExternalLink href="https://styled-components.com/docs/basics#motivation">
        https://styled-components.com/docs/basics#motivation
      </ExternalLink>
    </Step>
    <Points>
      <ul>
        <Step>
          <li>
            <strong>Automatic critical CSS</strong>: styled-components keeps track of which components are rendered on a
            page and injects their styles and nothing else, fully automatically. Combined with code splitting, this
            means your users load the least amount of code necessary.
          </li>
        </Step>
        <Step>
          <li>
            <strong>No class name bugs</strong>: styled-components generates unique class names for your styles. You
            never have to worry about duplication, overlap or misspellings.
          </li>
        </Step>
        <Step>
          <li>
            <strong>Painless maintenance</strong>: you never have to hunt across different files to find the styling
            affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
          </li>
        </Step>
        <Step>
          <li>
            <strong>Easier deletion of CSS</strong>
            <OverflødigStyling>
              : it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes
              it obvious, as every bit of styling is tied to a specific component. If the component is unused (which
              tooling can detect) and gets deleted, all its styles get deleted with it.
            </OverflødigStyling>
          </li>
        </Step>
        <Step>
          <li>
            <strong>Simple dynamic styling</strong>: adapting the styling of a component based on its props or a global
            theme is simple and intuitive without having to manually manage dozens of classes.
          </li>
        </Step>
        <Step>
          <li>
            <strong>Automatic vendor prefixing</strong>: write your CSS to the current standard and let
            styled-components handle the rest.
          </li>
        </Step>
        <Step>
          <li>
            Code is more often <strong>read</strong> than it is <strong>written</strong>, as such, we need to make our
            code as <strong>readable</strong> and <strong>understandable</strong> as possible
          </li>
        </Step>
      </ul>
    </Points>
  </Style>
);
