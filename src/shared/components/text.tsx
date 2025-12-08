import React from 'react';
import { cva } from 'class-variance-authority';

const p = cva(['font-medium'], {
  variants: {
    size: {
      large: ['text-sm', 'md:text-base'],
      medium: ['text-sm', 'md:text-[15px]', 'md:leading-6'],
      small: ['text-[13px]', 'leading-5'],
    },
  },
});

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'small' | 'medium' | 'large';
  semantic?: boolean;
  ref?: React.Ref<HTMLElement>;
}

function Text({
  size = 'medium',
  semantic = true,
  ref,
  className,
  children,
  ...rest
}: TextProps) {
  const component = semantic ? 'p' : 'span';

  return React.createElement(
    component,
    { ref, className: p({ size, className }), ...rest },
    children,
  );
}

export default Text;
