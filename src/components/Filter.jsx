import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const Filter = ({ filter, onChange }) => {
  return (
    <div className="mb-10 flex items-center justify-end">
      <div className="relative">
        <AiOutlineSearch className="absolute top-1/2 left-2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
        <input
          className="input !pl-10"
          type="text"
          name="name"
          value={filter}
          onChange={e => onChange(e.currentTarget.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    </div>
  );
};
