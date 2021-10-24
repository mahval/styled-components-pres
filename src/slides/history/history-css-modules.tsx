import React from 'react';
import historyCSSModules from '../img/css-modules.png';
import { ImgContainer, Style, StyledImg, StyledList } from '../styled-components';

export const HistoryCSSModules = () => (
  <Style>
    <ImgContainer>
      <StyledImg widthPerc={80} src={historyCSSModules} alt="CSS history" />
    </ImgContainer>
    <StyledList>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </StyledList>
  </Style>
);

const points: string[] = [
  // 'CSS Modules har en vanlig CSS-fil og bruker f. eks. Webpack til å kompilere til ny CSS',
  'CSS Modules løser problemet med unique namespacing, men et nytt problem vi får er at koden er mye mindre lesbar',
];
