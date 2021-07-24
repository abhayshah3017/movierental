import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../comman/input";
import Selet from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    if (!error) return null;
    // console.log(error);
    return error.details[0].message;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //Checking errors
    const errors = this.validate();
    //console.log({errors});
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    // console.log(errorMessage);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderButton = (label) => {
    return (
      <button
        type="submit"
        disabled={this.validate() ? true : false}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };
  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
  renderSelect = (name, label, options, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Selet
        name={name}
        label={label}
        options={options}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
