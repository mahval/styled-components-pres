import React from 'react';
import historyCSSModules from '../img/css-modules.png';
import { Style, StyledImg, StyledList } from '../styled-components';

export const HistoryCSSModules = () => (
  <Style>
    <div>
      <StyledImg widthPerc={80} src={historyCSSModules} alt="CSS history" />
    </div>
    <StyledList>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </StyledList>
  </Style>
);

const points: string[] = [
  'CSS Modules (CSS i JS) er en CSS-fil (alle .css-filer kan være en CSS Module) og bruker feks Webpack til å kompilere til CSS',
  'CSS modules solve this in part by namespacing the style, but the main problem is that they make the code much less readable. (eksempel 3)',
];
