import React, { ReactNode } from 'react';
import { HistoryBEM } from './history/history-bem';
import { HistoryCSS } from './history/history-css';
import { HistoryCSSModules } from './history/history-css-modules';
import { HistoryCSSModulesExample } from './history/history-css-modules-examples';
import { HistoryCSSModulesExplained } from './history/history-css-modules-explained';
import { HistoryStyledComponents } from './history/history-css-styled-components';
import { HistoryOfCSS } from './history/history-of-css';
import { HistorySASS } from './history/history-sass';
import { HistorySASSExamples } from './history/history-sass-examples';
import { HistoryTailwind } from './history/history-tailwind';
import { Hvordan } from './hvordan';
import { Hvorfor } from './hvorfor';
import { Velkommen } from './velkommen';

const HISTORY_SLIDES = [
  <HistoryOfCSS key={1} />,
  <HistoryCSS key={2} />,
  <HistorySASSExamples key={3} />,
  <HistorySASS key={3} />,
  <HistoryBEM key={4} />,
  <HistoryTailwind key={4} />,
  <HistoryCSSModulesExplained key={5} />,
  <HistoryCSSModules key={5} />,
  <HistoryCSSModulesExample key={6} />,
  <HistoryStyledComponents key={7} />,
];

const SLIDES = [<Hvordan key={10} />, <Hvorfor key={11} />];

export const FINAL_SLIDES: ReactNode[] = [<Velkommen key={0} />, ...HISTORY_SLIDES, ...SLIDES];
