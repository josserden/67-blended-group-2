import React, { Component } from 'react';
import { Button } from 'components/Button';

const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
};

export class Form extends Component {
  state = { ...INITIAL_STATE };

  render() {
    return (
      <form className="mx-auto grid max-w-lg gap-5" autoComplete="off">
        <label className="label">
          <span className="label-text">Full name</span>
          <input
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className="label">
          <span className="label-text">Email address</span>

          <input
            className="input"
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
            title="Email is not valid"
            required
          />
        </label>

        <label className="label">
          <span className="label-text">Phone number</span>

          <input
            className="input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button>Add contact</Button>
      </form>
    );
  }
}
