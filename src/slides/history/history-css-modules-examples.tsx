import React from 'react';
import { Step } from '../../components/slide/step';
import exampleCssModules from '../img/example-3-css-modules.png';
import exampleStyledComponents from '../img/example-3-styled-components.png';
import { ContentContainer, Rows, StyledImg } from '../styled-components';

export const HistoryCSSModulesExample = () => (
  <Rows>
    <ContentContainer>
      <Step>
        <StyledImg widthPerc={90} src={exampleCssModules} />
      </Step>
    </ContentContainer>
    <ContentContainer>
      <Step>
        <StyledImg widthPerc={90} src={exampleStyledComponents} />
      </Step>
    </ContentContainer>
  </Rows>
);
