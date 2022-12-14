import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = true,
  className = "",
  min,
  max,
  ...otherProps
}) => (
  <div className="mt-6">
    {label && (
      <label
        className="block text-sm font-medium
              leading-5 text-bb-gray-700"
      >
        {label}
      </label>
    )}
    <div className="mt-1 rounded-md shadow-sm">
      <input
        disabled={disabled}
        max={max}
        min={min}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        className={classnames(
          "transition border focus:outline-none focus:shadow-outline-blue block w-full appearance-none rounded-md border-gray-300 px-3 py-2 placeholder-gray-400 duration-150 ease-in-out focus:border-blue-300 sm:text-sm sm:leading-5",
          [className]
        )}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Input;
