import { keyframes } from 'styled-components/macro';

const fadeOuts = [
  keyframes`
      to {
        transform: translateY(-100%);
      }
    `,
  keyframes`
      to {
        transform: scale(0);
        opacity: 0;
      }
    `,
  keyframes`
      to {
        transform: rotate(-180deg) translateX(100vh);
      }
    `,
];

// export const randomFadeOut = (seed: number) =>
export const randomFadeOut = () =>
  // return fadeOuts[Math.floor(seed * fadeOuts.length)];
  fadeOuts[0];
