import React, { useState } from "react";

const Form = props => {
  // set state to collect form data
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    pwConfirm: ""
  });

  // handle form inputs
  const onChangeHandler = e => {
    console.log(e.target.name, e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      {/* build form labels and inputs */}
      <form onSubmit={onSubmitHandler}>
        <label>First Name: </label>
        <input type="text" name="firstName" onChange={onChangeHandler}></input>
        {/* validation -- firstName must be > 2 char */}
        {formState.firstName.length > 0 && formState.firstName.length < 2 && (
          <p>First name must be at least 2 characters.</p>
        )}
        <br />
        <label>Last Name: </label>
        <input type="text" name="lastName" onChange={onChangeHandler}></input>
        {/* validation -- lastName must be > 2 char */}
        {formState.lastName.length > 0 && formState.lastName.length < 2 && (
          <p>Last name must be at least 2 characters.</p>
        )}
        <br />
        <label>Email: </label>
        <input type="email" name="email" onChange={onChangeHandler}></input>
        {/* validation -- email must be > 5 char */}
        {formState.email.length > 0 && formState.email.length < 5 && (
          <p>Email must be at least 5 characters.</p>
        )}
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
        ></input>
        {/* validation -- password must be > 8 char */}
        {formState.password.length > 0 && formState.password.length < 8 && (
          <p>Password must be at least 8 characters.</p>
        )}
        <br />
        <label>Confirm Password: </label>
        <input
          type="password"
          name="pwConfirm"
          onChange={onChangeHandler}
        ></input>
        {/* validation -- pwConfirm must be > 8 char && must match pw */}
        {formState.pwConfirm.length > 0 && formState.pwConfirm.length < 8 && (
          <p>Password must be at least 8 characters.</p>
        )}
        {formState.pwConfirm != formState.password && (
          <p>Passwords don't match.</p>
        )}
        <br />
        <input type="submit" />
      </form>

      {/* display of user's inputs */}
      <p>First Name: {formState.firstName}</p>
      <p>Last Name: {formState.lastName}</p>
      <p>Email: {formState.email}</p>
      <p>Password: {formState.password}</p>
      <p>Confirm Password: {formState.pwConfirm}</p>
    </div>
  );
};

export default Form;
