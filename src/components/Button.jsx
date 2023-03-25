import React from 'react';
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import cn from 'classnames';

export const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) => {
  switch (variant) {
    case 'primary':
      return (
        <button
          className={cn(
            'flex max-w-[200px] items-center justify-center gap-2.5 rounded-lg border px-5 py-3 font-bold uppercase tracking-wide text-slate-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700',
            className
          )}
          type={type}
          {...props}
        >
          {children}
        </button>
      );

    case 'icon':
      return (
        <button
          className={cn(
            'text-gray-400 transition-colors duration-300 hover:text-gray-100',
            className
          )}
          {...props}
        >
          <AiFillDelete className="h-5 w-5" />
        </button>
      );

    default:
      return <></>;
  }
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'button']),
  variant: PropTypes.oneOf(['primary', 'icon']),
};
