import React from 'react';
import historyBEM from '../img/BEM.png';
import { Style, StyledImg, StyledList } from '../styled-components';

export const HistoryBEM = () => (
  <Style>
    <div>
      <StyledImg widthPerc={80} src={historyBEM} />
    </div>
    <div>
      <StyledList>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </StyledList>
    </div>
  </Style>
);

const points: string[] = [
  'BEM (Block, Element, Modifier): Naming conventions',
  'When strictly followed, BEM works really well, but why is something as fundamental as scoping left up to pure convention?',
];
