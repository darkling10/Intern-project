import React, { useState } from "react";

const FormDemo = () => {
  const [first, setfirst] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(first);

    let response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    console.log(response);
  };

  const changeHandler = (e) => {
    setfirst(e.target.value);
    // console.log(e.target.value)
  };
  return (
    <div>
      <form onSubmit={submitHandler} method="get" action="/demo">
        <label htmlFor="name"></label>
        <input type="name" id="name" name="name" onChange={changeHandler} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormDemo;
