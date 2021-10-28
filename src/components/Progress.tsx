import React from 'react';
import styled from 'styled-components/macro';
import { style } from '../utils/style';

interface Props {
  value: number;
  max: number;
}

const ProgressContainer = styled.div`
  width: 400px;
  text-align: center;
  margin-bottom: 20px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Progress = ({ value, max }: Props) => {
  const progressPercentage = (value / max) * 100;

  return (
    <ProgressContainer>
      {value} / {max}
      <ProgressBarContainer>
        <BaseProgressBar />
        <ProgressBar progressPercentage={progressPercentage} />
      </ProgressBarContainer>
    </ProgressContainer>
  );
};

const ProgressBarContainer = styled.div`
  height: 20px;
  width: 100%;
  position: relative;
`;

const BaseProgressBar = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 0.2s ease-in-out;
  background: grey;
  width: 100%;
`;

interface ProgressBarProps {
  progressPercentage: number;
}

const ProgressBar = styled(BaseProgressBar)<ProgressBarProps>`
  background-color: ${style.color.primary};
  width: ${(props) => `${props.progressPercentage}%`};
`;
