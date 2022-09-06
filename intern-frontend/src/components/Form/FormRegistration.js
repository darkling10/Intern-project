import React from "react";

const FormLogin = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <form className="form-control row">
      <div style={{ margin: "auto", width: "60%" }}>
        <div className="form-group row">
          <label for="email">Email address</label>
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
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <br></br>
        <div className="form-group row">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Enter Phone Number"
          />
        </div>
        <br></br>
        <div className="form-group row">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter Confirm Password"
          />
        </div>
        <br></br>
        <div className="form-group row">
          <label for="cpassword">Confirm Password</label>
          <input
            type="cpassword"
            name="cpassword"
            className="form-control"
            id="cpassword"
            placeholder="Enter Confirm Password"
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
