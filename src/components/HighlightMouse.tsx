import { State as UseMouseState } from 'react-use/lib/useMouse';
import styled from 'styled-components/macro';

interface Props {
  mouse: UseMouseState;
}

export const HighlightMouse = styled.div.attrs(({ mouse }: Props) => ({
  style: {
    top: mouse.docY,
    left: mouse.docX,
  },
}))<Props>`
  position: fixed;
  transform: translate(-50%, -50%);
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #fde596;
  box-shadow: 0 0 0.5rem #000c;
  opacity: 0.2;
  z-index: 1000;
  pointer-events: none;
`;
