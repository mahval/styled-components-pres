import styled from 'styled-components/macro';
import { style } from '../../utils/style';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: none;
  background-color: ${(props) => (props.primary === true ? style.color.primary : style.color.secondary)};
  color: ${(props) => (props.primary === true ? style.color.secondary : style.color.primary)};
  border: 2px solid ${style.color.text};
  padding: 10px;
  cursor: pointer;
  font-size: 1em;
  box-shadow: 2px 2px 2px lightyellow;
  margin: 10px;
  &:hover {
    background-color: ${(props) => (props.primary === true ? 'lightyellow' : '#4d4b4b')};
  }
`;

export const WarningButton = styled(Button)`
  color: red;
  box-shadow: 2px 2px 2px pink;
  border-color: red;
  &:hover {
    background-color: pink;
  }
`;
