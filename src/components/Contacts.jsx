import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact';

const tableHeader = [
  { name: 'User', align: 'left' },
  { name: 'Tel number', align: 'left' },
  { name: 'Status', align: 'left' },
];

export const Contacts = ({ contacts = [], onDelete }) => {
  return (
    <table className="mx-auto border-separate space-y-6 text-sm text-slate-200">
      <thead className="bg-gray-800 text-gray-400">
        <tr>
          {tableHeader.map(({ name, align }) => (
            <th
              key={name.toLowerCase()}
              className={`p-3 ${align === 'left' ? 'text-left' : ''}`}
            >
              {name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {contacts.map(({ id, name, number, email }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            email={email}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
