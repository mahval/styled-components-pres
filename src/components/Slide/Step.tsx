import * as React from 'react';
import { ReactNode, useContext, useState } from 'react';
import { useMount, useUnmount } from 'react-use';
import styled, { css } from 'styled-components/macro';
import { StepContext } from './StepContext';

interface Props {
  children: ReactNode;
}

const Style = styled.div<{ show: boolean }>`
  ${(props) =>
    !props.show &&
    css`
      opacity: 0;
      transform: scale(0.8);
    `};
  transition: 0.3s;
  display: inline-block;
`;

export const Step = (props: Props) => {
  const context = useContext(StepContext);
  const [stepNumber, setStepNumber] = useState<undefined | number>();

  useMount(() => {
    setStepNumber(context.addStep());
  });

  useUnmount(() => {
    context.removeStep();
  });

  return <Style show={stepNumber !== undefined && context.currentStep >= stepNumber}>{props.children}</Style>;
};
