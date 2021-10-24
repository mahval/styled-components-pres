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

export const Progress = ({ value, max }: Props) => (
  <ProgressContainer>
    {value} / {max}
    <ProgressBarContainer>
      <Background />
      <ProgressBar percent={(value / max) * 100} />
    </ProgressBarContainer>
  </ProgressContainer>
);

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
  width: 300px;
`;

const Background = styled(BaseProgressBar)`
  background: grey;
  width: 100%;
`;

interface ProgressBarProps {
  percent: number;
}

const ProgressBar = styled(BaseProgressBar)<ProgressBarProps>`
  background: ${style.color.primary};
  width: ${(props) => `${props.percent}%`};
`;
