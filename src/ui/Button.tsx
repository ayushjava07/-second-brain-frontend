import { type ReactElement } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps {
  variant: Variant;
  size?: Size;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500',
  secondary: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-500',
};

const sizeClasses: Record<Size, string> = {
  small: 'px-4 py-1 text-sm',
  medium: 'px-8 py-2 text-base',
  large: 'px-12 py-3 text-lg',
};

export const Button = ({
  variant,
  size = 'medium',
  text,
  startIcon,
  endIcon,
}: ButtonProps) => {
  const className = `${variantClasses[variant]} ${sizeClasses[size]} flex items-center gap-2 rounded-lg cursor-pointer`;

  return (
    <button className={className}>
        {startIcon}
        {text}
        {endIcon}
    </button>
  );
};
