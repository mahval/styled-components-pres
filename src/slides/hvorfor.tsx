import React from 'react';
import { ExternalLink } from '../components/ExternalLink';
import { Step } from '../components/Slide/Step';
import stateOfCSS from './img/stateofcss-1.png';
import { ContentContainer, Style, StyledImg } from './styled-components';

export const Hvorfor = () => (
  <Style>
    <Step>
      <h1>Hvorfor styled components?</h1>
    </Step>
    <Step>
      <h3>State of CSS</h3>
      <ExternalLink href="https://2019.stateofcss.com/technologies/css-in-js/">
        https://2019.stateofcss.com/technologies/css-in-js/
      </ExternalLink>
    </Step>
    <Step>
      <ContentContainer>
        <StyledImg widthPerc={80} src={stateOfCSS} />
      </ContentContainer>
    </Step>
  </Style>
);
