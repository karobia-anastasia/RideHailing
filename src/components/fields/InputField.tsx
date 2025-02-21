import React from 'react';

const InputField = ({ id, label, type, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="mt-2 w-full p-3 border border-gray-300 rounded-md"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
