import styled from 'styled-components';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';
import shadows from '../../constants/shadows';
import { OwnProps } from './Input';
import fonts from '../../constants/fonts';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputLayout = styled.input<Partial<OwnProps>>`
  outline: none;
  height: ${spaces[48]};
  font-size: ${fonts[16]};
  font-weight: 600;
  line-height: ${spaces[24]};
  border-radius: ${radius[6]};
  box-shadow: ${shadows.level1};
  box-sizing: border-box;
  padding: 0px ${spaces[16]};
  transition: 0.5s;

  background: white;
  color: ${colors.red};
  border: 2px solid ${colors.red};

  ::placeholder {
    color: ${colors.red};
  }
`;

export const Label = styled.label`
  display: inline-block;
  color: ${colors.dark[100]};
  font-size: ${fonts[14]};
  margin-bottom: ${spaces[8]};
`;
