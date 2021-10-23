import React from 'react';
import CSSModulesExplained1 from '../img/css-modules-explained-1.png';
import CSSModulesExplained2 from '../img/css-modules-explained-2.png';
import { ContentContainer, Rows, Style, StyledImg } from '../styled-components';

export const HistoryCSSModulesExplained = () => (
  <Style>
    <h1>CSS Modules</h1>
    <Rows>
      <ContentContainer>
        <StyledImg widthPerc={80} src={CSSModulesExplained1} />
      </ContentContainer>
      <ContentContainer>
        <StyledImg widthPerc={80} src={CSSModulesExplained2} />
      </ContentContainer>
    </Rows>
  </Style>
);
