import React from "react";
import FormLogin from "./Form/FormLogin";
import { Card } from "react-bootstrap";
import NavbarUser from "./widget/Navbar";

function Login() {
  return (
    <>
      <NavbarUser />
      <FormLogin />
    </>
  );
}

export default Login;
