import * as React from 'react';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { style } from '../../utils/style';
import { NavKnapper } from '../NavKnapper';
import { NavigationContext } from './NavigationContext';
import { StepContext } from './StepContext';
import { randomFadeIn } from './fadeIns';
import { randomFadeOut } from './fadeOuts';

const SlideSingleStyle = styled.div<{
  current: boolean;
  seed1: number;
  seed2: number;
}>`
  height: 100vh;
  width: 100vw;
  border: 0.2rem ${style.color.text} solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${style.color.slide};
  animation: ${(props) =>
      // props.current ? randomFadeIn(props.seed1) : randomFadeOut(props.seed2)}
      props.current ? randomFadeIn() : randomFadeOut()}
    0.5s both;
  animation-delay: ${(props) => (props.current ? '.2s' : '0')};
`;

const useAnimationSeed = (currentSlide: boolean) => {
  const seed = useRef({ seed1: Math.random(), seed2: Math.random() });
  useEffect(() => {
    seed.current = { seed1: Math.random(), seed2: Math.random() };
  }, [currentSlide]);

  return seed;
};

const useHide = (currentSlide: boolean) => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (currentSlide) {
      setHide(false);
    } else {
      const id = setTimeout(() => setHide(true), 500);
      return () => clearTimeout(id);
    }
  }, [currentSlide]);

  return hide;
};

interface SlideProps {
  children: ReactNode;
  prevSlide?: () => void;
  nextSlide?: () => void;
  currentSlide: boolean;
}

export const Slide = ({ children, prevSlide, nextSlide, currentSlide }: SlideProps) => {
  const hide = useHide(currentSlide);
  const seed = useAnimationSeed(currentSlide);

  const stepCount = useRef(0);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = useCallback(() => {
    if (currentStep < stepCount.current - 1) {
      setCurrentStep((prevState) => prevState + 1);
      return;
    }

    nextSlide?.();
  }, [currentStep, nextSlide]);

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prevState) => prevState - 1);
      return;
    }

    prevSlide?.();
  }, [currentStep, prevSlide]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          handlePrev();
          return;
        case 'ArrowRight':
          handleNext();
          break;
        default:
      }
    },
    [handleNext, handlePrev]
  );

  useEffect(() => {
    if (currentSlide) {
      window.addEventListener('keyup', handleKeyDown);
      return () => window.removeEventListener('keyup', handleKeyDown);
    }
  }, [currentSlide, handleKeyDown]);

  const addStep = () => stepCount.current++;

  const removeStep = () => stepCount.current--;

  if (hide) {
    return null;
  }

  return (
    <NavigationContext.Provider value={{ next: handleNext, prev: handlePrev }}>
      <StepContext.Provider
        value={{
          currentStep,
          stepCount: stepCount.current,
          addStep,
          removeStep,
          setCurrentStep,
        }}
      >
        <SlideSingleStyle current={currentSlide} seed1={seed.current.seed1} seed2={seed.current.seed2}>
          {children}
          <NavKnapper />
        </SlideSingleStyle>
      </StepContext.Provider>
    </NavigationContext.Provider>
  );
};
