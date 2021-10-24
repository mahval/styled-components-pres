import React, { useEffect, useRef, useState } from 'react';
import { useMouse } from 'react-use';
import { State } from 'react-use/lib/useMouse';
import { createGlobalStyle } from 'styled-components/macro';
import { HighlightMouse } from './components/highlightMouse';
import { Progress } from './components/progress';
import { Slide } from './components/slide/slide';
import { FINAL_SLIDES } from './slides/slides';
import { getStoredSlide, storeSlide } from './utils/localStorage';
import { style } from './utils/style';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 140%;
  }
  body {
    margin: 0;
    background-color: ${style.color.background};
    color: ${style.color.text};
    font-family: 'Raleway', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  *:focus {
    outline: none;
    transition: 0s;
    filter: drop-shadow(0 0 .3rem gold);
  }
`;

export const App = () => {
  const [currentSlide, setCurrentSlide] = useState(getStoredSlide());
  const ref = useRef<HTMLDivElement>(null);
  const mouse: State = useMouse(ref);

  useEffect(() => {
    storeSlide(currentSlide);
  }, [currentSlide]);

  const prevSlide = currentSlide <= 0 ? undefined : () => setCurrentSlide((prevState) => prevState - 1);
  const nextSlide =
    currentSlide >= FINAL_SLIDES.length - 1 ? undefined : () => setCurrentSlide((prevState) => prevState + 1);

  return (
    <div ref={ref}>
      <GlobalStyle />
      {FINAL_SLIDES.map((content, index) => (
        <Slide key={index} currentSlide={index === currentSlide} prevSlide={prevSlide} nextSlide={nextSlide}>
          {content}
        </Slide>
      ))}
      <Progress value={currentSlide + 1} max={FINAL_SLIDES.length} />
      <HighlightMouse mouse={mouse} />
    </div>
  );
};
