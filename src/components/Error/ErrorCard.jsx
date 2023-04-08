import React from 'react';
import PropTypes from 'prop-types';

import css from './ErrorCard.module.css';

export const ErrorCard = ({ children }) => {
  return (
    <div className={css['alert']} role="alert">
      {children}
    </div>
  );
};

ErrorCard.propTypes = {
  children: PropTypes.node.isRequired,
};
