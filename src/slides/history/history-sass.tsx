import React from 'react';
import { ExternalLink } from '../../components/ExternalLink';
import historySASS from '../img/SASS.png';
import { Style, StyledImg, StyledList } from '../styled-components';

export const HistorySASS = () => (
  <Style>
    <StyledImg src={historySASS} alt="CSS history" />
    <StyledList>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </StyledList>
    <ExternalLink href="https://www.sassmeister.com/">https://www.sassmeister.com/</ExternalLink>
  </Style>
);

const points: string[] = [
  'Da ble vi avhengige av nesting, som gjorde at stylesheets ble veldig store i størrelse',
  'Et ekstra byggesteg. Kompilering kan ta tid. Refresher og ser ingen endringer',
  'De kan også produsere veldig store CSS-filer pga nesting og det blir litt "magisk" hva som kommer ut',
  // '"Recently made a selector that created a 187-character multiselector from nearly no SCSS. It looks simple and is easy to follow in SCSS, but it is almost unmaintable as regular CSS. SCSS is great for organization, but you definitely have to watch your CSS output."',
  // 'Lett å legge til LESS, men vanskelig å fjerne igjen hvis vi ønsker det. Får ikke kopiert inn LESS i prosjekter som ikke bruker det, og generert CSS er sannsynligvis rotete',
];
