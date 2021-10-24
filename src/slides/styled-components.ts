import styled from 'styled-components/macro';
import { style } from '../utils/style';

export const Rows = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 20px;
`;

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
`;

export const ContentContainer = styled.div`
  margin: 20px 0;
  flex-basis: 50%;
  overflow: auto;
  text-align: center;
  img {
    width: 90%;
  }
`;

interface StyledImgProps {
  widthPerc?: number;
}

export const StyledImg = styled.img<StyledImgProps>`
  border: 0.5rem ${style.color.text} solid;
  width: ${(props) => (props.widthPerc !== undefined ? `${props.widthPerc}%` : 'auto')};
  max-width: 100%;
`;

export const ImgContainer = styled.div`
  text-align: center;
  overflow: auto;
`;

export const StyledList = styled.ul`
  max-width: 70%;
  li {
    margin-bottom: 0.5rem;
  }
`;
export const StyledNumberedList = styled.ol``;
