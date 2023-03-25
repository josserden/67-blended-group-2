import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, email, number, onDelete }) => {
  return (
    <tr className="bg-gray-700">
      <td className="p-3">
        <div className="align-items-center flex">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            alt={name}
          />

          <div className="ml-3">
            <h3 className="mb-1.5">{name}</h3>
            <div className="text-gray-400">{email}</div>
          </div>
        </div>
      </td>
      <td className="p-3">{number}</td>

      <td className="p-3">
        <span className="rounded-md bg-green-400 px-2 text-gray-50">
          available
        </span>
      </td>

      <td className="p-3">
        <button
          onClick={() => onDelete(id)}
          className="text-gray-400 transition-colors duration-300 hover:text-gray-100"
        >
          <AiFillDelete className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
