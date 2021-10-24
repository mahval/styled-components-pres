import React from 'react';
import historyBEM from '../img/BEM.png';
import { ImgContainer, Style, StyledImg, StyledList } from '../styled-components';

export const HistoryBEM = () => (
  <Style>
    <ImgContainer>
      <StyledImg widthPerc={80} src={historyBEM} />
    </ImgContainer>
    <StyledList>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </StyledList>
  </Style>
);

const points: string[] = [
  'BEM (Block, Element, Modifier): Navnekonvensjoner',
  'BEM fungerer veldig bra når det blir fulgt til punkt og prikke, men scoping burde ikke fungere bare fordi vi bruker konvensjoner',
];
