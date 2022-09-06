import React, { useState } from "react";

const FormLogin = () => {

  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form className="form-control row">
      <div style={{ margin: "auto", width: "60%" }}>
        <div className="form-group row">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <br></br>

        <div className="form-group row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter Confirm Password"
          />
        </div>

        <br></br>
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={submitHandler}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
