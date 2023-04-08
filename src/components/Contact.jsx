import PropTypes from 'prop-types';
import { Button } from 'components/Button';

import { generateRandomStatus } from 'utils/generateRandomStatus';
import { getCurrentClass } from 'utils/getCurrentClass';

export const Contact = ({ id, name, email, number, onDelete }) => {
  const status = generateRandomStatus();

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
            <a className="contactLink" href={'mailto:' + email}>
              {email}
            </a>
          </div>
        </div>
      </td>

      <td className="p-3">
        <a className="contactLink" href={'tel:' + number}>
          {number}
        </a>
      </td>

      <td className="p-3">
        <span
          // className={cn('rounded-md px-2 text-gray-50', {
          //   'bg-green-500': status === 'online',
          //   'bg-gray-500': status === 'offline',
          //   'bg-red-500': status === 'busy',
          // })}
          className={`rounded-md px-2 text-gray-50 ${getCurrentClass(status)}`}
        >
          {status}
        </span>
      </td>

      <td className="p-3">
        <Button variant="icon" onClick={() => onDelete(id)} />
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
