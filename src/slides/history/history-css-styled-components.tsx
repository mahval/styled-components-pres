import React from 'react';
import historyStyledComponents from '../img/styled-components.png';
import { Style, StyledImg, StyledList } from '../styled-components';

export const HistoryStyledComponents = () => (
  <Style>
    <div>
      <StyledImg widthPerc={80} src={historyStyledComponents} alt="CSS history" />
    </div>
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
  'Klassenavn er unødvendige. Det blir et ekstra ledd, som kan funke eller ikke funke avhengig av at du har satt det opp riktig og ikke har en eller annen oldefar-klasse som overskriver',
];
