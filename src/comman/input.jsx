import React from "react";

const Input = (props) => {
  const { name, label, error, ...rest } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...rest}
        id={name}
        name={name}
        className="form-control"
        aria-describedby="emailHelp"
      />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
