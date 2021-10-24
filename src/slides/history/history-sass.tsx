import React from 'react';
import { ExternalLink } from '../../components/externalLink';
import historySASS from '../img/SASS.png';
import { ImgContainer, Style, StyledImg, StyledList } from '../styled-components';

export const HistorySASS = () => (
  <Style>
    <ImgContainer>
      <StyledImg widthPerc={70} src={historySASS} alt="CSS history" />
    </ImgContainer>
    <StyledList>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </StyledList>
    <ExternalLink href="https://www.sassmeister.com/gist/2553619b04f6fb8aa27d0d9aafceae84?token=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&scope=gist,read:user">
      https://www.sassmeister.com/
    </ExternalLink>
  </Style>
);

const points: string[] = [
  'Da ble vi avhengige av nesting, som gjorde at CSS-filene kunne bli veldig store i størrelse pga. nesting, og det blir litt "magisk" hva som kommer ut',
  'Et ekstra byggesteg. Kompilering kan ta tid. Refresher og ser ingen endringer',
  // '"Recently made a selector that created a 187-character multiselector from nearly no SCSS. It looks simple and is easy to follow in SCSS, but it is almost unmaintable as regular CSS. SCSS is great for organization, but you definitely have to watch your CSS output."',
  'Lett å legge til SASS, men vanskelig å fjerne igjen hvis vi ønsker det',
  'Får ikke unique namespaces',
];
