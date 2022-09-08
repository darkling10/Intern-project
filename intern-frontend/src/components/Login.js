import React from "react";
import FormikLogin from "./Form/FormikLogin";
import { Card } from "react-bootstrap";
import NavbarUser from "./widget/Navbar";
import FormLogin from "./Form/FormLogin";

function Login() {
  return (
    <>
      <NavbarUser />
      <FormikLogin />
    </>
  );
}

export default Login;
