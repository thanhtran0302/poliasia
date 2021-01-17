import React, {
  FC,
  MouseEvent,
  ButtonHTMLAttributes,
  ReactElement
} from 'react';
import { ButtonLayout } from './Button.styles';

export enum ButtonTypes {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button'
}

export enum ComponentAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  CTA = 'cta'
}

export enum ButtonIconPosition {
  LEFT = 'left',
  RIGHT = 'right'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonTypes;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  label?: string;
  icon?: ReactElement<Element>;
  iconPosition?: ButtonIconPosition;
  width?: string;
}

const Button: FC<ButtonProps> = ({ icon, label, type, onClick, ...rest }) => (
  <ButtonLayout type={type} onClick={onClick} {...rest}>
    {icon && icon}
    {label && <span>{label}</span>}
  </ButtonLayout>
);

export default Button;
