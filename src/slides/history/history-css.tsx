import React from 'react';
import historyCSS from '../img/CSS.png';
import { Style, StyledImg, StyledList } from '../styled-components';

export const HistoryCSS = () => (
  <Style>
    <StyledImg src={historyCSS} alt="CSS history" />
    <StyledList>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </StyledList>
  </Style>
);

const points: string[] = ['Ingen kodestandard', 'Du får ingen klapp på skulderen for å slite gjennom dette'];
