import React from 'react';
import historyStyledComponents from '../img/styled-components.png';
import { ImgContainer, Style, StyledImg, StyledList } from '../styled-components';

export const HistoryStyledComponents = () => (
  <Style>
    <ImgContainer>
      <StyledImg widthPerc={70} src={historyStyledComponents} alt="CSS history" />
    </ImgContainer>
    <StyledList>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </StyledList>
  </Style>
);

const points: string[] = [
  'Styled Components gir oss semantisk og lesbar kode samtidig som at vi får unique namespacing',
  'I stedet for å lage styling for så å binde det til en komponent, lager vi komponenten direkte',
  'Klassenavn er unødvendige!',
];
