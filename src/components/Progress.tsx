import React from 'react';
import './progress.css';

interface Props {
  value: number;
  max: number;
}

export const Progress = (props: Props) => (
  <div className="progressStyle">
    {props.value} / {props.max}
  </div>
);
