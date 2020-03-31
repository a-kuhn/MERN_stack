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
        <br />
        <label>Last Name: </label>
        <input type="text" name="lastName" onChange={onChangeHandler}></input>
        <br />
        <label>Email: </label>
        <input type="email" name="email" onChange={onChangeHandler}></input>
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
        ></input>
        <br />
        <label>Confirm Password: </label>
        <input
          type="password"
          name="pwConfirm"
          onChange={onChangeHandler}
        ></input>
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
