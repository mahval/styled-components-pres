import React from 'react';
import tailwind from '../img/tailwind.png';
import { Style, StyledImg } from '../styled-components';

export const HistoryTailwind = () => (
  <Style>
    <h1>Tailwind</h1>
    <StyledImg widthPerc={80} src={tailwind} />
  </Style>
);
