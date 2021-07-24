import React from "react";

const Selet = (props) => {
  const { name, label, options, error, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} className="form-control" {...rest}>
        <option value=""></option>
        {options.map((option) => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Selet;
