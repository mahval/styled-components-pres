import React from 'react';
import tailwind from '../img/tailwind.png';
import { ImgContainer, Style, StyledImg } from '../styled-components';

export const HistoryTailwind = () => (
  <Style>
    <h1>Tailwind</h1>
    <ImgContainer>
      <StyledImg src={tailwind} />
    </ImgContainer>
  </Style>
);
