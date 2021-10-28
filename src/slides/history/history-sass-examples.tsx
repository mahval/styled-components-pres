import React from 'react';
import SASSExamples from '../img/sass-examples2.png';
import { Style, StyledImg, StyledList, StyledNumberedList } from '../styled-components';

export const HistorySASSExamples = () => (
  <Style>
    <h1>SASS/SCSS</h1>
    <StyledImg src={SASSExamples} />
    <div>
      <StyledList>
        <li>{firstPoint}</li>
        <StyledNumberedList>
          {solvesPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </StyledNumberedList>
      </StyledList>
    </div>
  </Style>
);

const firstPoint = 'Løser problemer som:';
const solvesPoints: string[] = ['Nesting', 'Variabler', 'Extends', 'Dele opp CSS-koden og organisere'];
