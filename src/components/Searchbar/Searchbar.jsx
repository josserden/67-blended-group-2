import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value);
    setValue('');
  };

  return (
    <header className={css['search-bar']}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <BiSearchAlt2 className={css['icon-search']} width="24" height="24" />
        </button>

        <input
          className={css.input}
          type="search"
          value={value}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
