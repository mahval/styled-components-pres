import { keyframes } from 'styled-components/macro';

const fadeIns = [
  keyframes`
      from {
        transform: translateY(100%);
      }
    `,
  keyframes`
      from {
        transform: scale(0);
      }
    `,
  keyframes`
      from {
        transform: rotate(180deg) translateX(100vh);
      }
    `,
];

// export const randomFadeIn = (seed: number) =>
export const randomFadeIn = () =>
  // return fadeIns[Math.floor(seed * fadeIns.length)];
  fadeIns[0];
