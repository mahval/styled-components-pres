import React from 'react';
import { Step } from '../../components/slide/step';
import exampleCssModules from '../img/example-3-css-modules.png';
import exampleStyledComponents from '../img/example-3-styled-components.png';
import { ContentContainer, Rows, StyledImg } from '../styled-components';

export const HistoryCSSModulesExample = () => (
  <Rows>
    <Step>
      <StyledImg widthPerc={100} src={exampleCssModules} />
    </Step>
    <Step>
      <ContentContainer>
        <StyledImg widthPerc={100} src={exampleStyledComponents} />
      </ContentContainer>
    </Step>
  </Rows>
);
