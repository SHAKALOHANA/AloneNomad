import React, { FC } from 'react';
import { baseButtonStyle, buttonVariants } from './CustomButton.css';
import type { CustomButtonMode } from '@/types/CustomButtonMode';
import { modeTextMap } from '@/types/CustomButtonMode';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: CustomButtonMode;
  className?: string;
}

const CustomButton: FC<ButtonProps> = ({
  children,
  mode = 'login',
  type = 'button',
  className,
  ...props
}) => {
  const variantClass = buttonVariants[mode];

  const combinedClassName = [baseButtonStyle, variantClass, className]
    .filter(Boolean)
    .join(' ');

  const buttonText = children || modeTextMap[mode];

  return (
    <button type={type} className={combinedClassName} {...props}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
