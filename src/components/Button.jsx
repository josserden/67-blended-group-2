import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, type = 'button' }) => {
  return (
    <button
      className="flex max-w-[200px] items-center justify-center gap-2.5 rounded-lg border px-5 py-3 font-bold uppercase tracking-wide text-slate-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 "
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
};
