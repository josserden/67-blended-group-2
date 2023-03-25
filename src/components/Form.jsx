import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from 'components/Button';

const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
};

export class Form extends Component {
  state = { ...INITIAL_STATE };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, number } = this.state;

    this.props.onSubmit({ id: nanoid(), name, email, number });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number, email } = this.state;

    return (
      <form
        className="mx-auto grid max-w-lg gap-5"
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <label className="label">
          <span className="label-text">Full name</span>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
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
            value={email}
            onChange={this.handleInputChange}
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
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
