import React from 'react';
import PropTypes from 'prop-types';

export const AppLayout = ({ children }) => {
  return (
    <section className="py-10">
      <div className="container">{children}</div>
    </section>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
