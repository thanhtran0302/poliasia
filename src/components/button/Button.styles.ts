import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
import colors from '../../constants/colors';
import spaces from '../../constants/spaces';

import { ButtonProps, ButtonIconPosition } from './Button';
import fonts from '../../constants/fonts';

type ButtonLayoutProps = Pick<ButtonProps, 'iconPosition' | 'width'>;

export const commonStyle: FlattenSimpleInterpolation = css`
  transition: background-color 0.2s ease-in, border 0.2s ease-in,
    color 0.2s ease-in;
`;

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  display: flex;
  align-items: center;
  border: 0;
  text-align: left;
  border-radius: ${radius[6]};
  font-size: ${fonts[14]};
  line-height: ${spaces[20]};
  font-weight: bold;
  height: ${spaces[48]};
  padding: ${spaces[4]} ${spaces[12]};
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;

    ${(props: Pick<ButtonLayoutProps, 'iconPosition'>) =>
      props.iconPosition === ButtonIconPosition.LEFT
        ? css`
            margin-right: ${spaces[8]};
          `
        : css`
            margin-left: ${spaces[8]};
          `}
  }

  :not(:disabled) {
    box-shadow: ${shadows.level1};
  }

  :active {
    box-shadow: unset;
  }

  :active,
  :focus {
    outline: none;
  }

  ${commonStyle};
  color: white;
  background: ${colors.red};
  border: 2px solid ${colors.red};
`;
