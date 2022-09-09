import React, { useEffect } from "react";
// import jwt from "jsonwebtoken"
import { useNavigate } from "react-router-dom";
import Buffer from "buffer";
import { getData } from "../services/getList";

const Dashboard = () => {
  const history = useNavigate();

  const populateQuote = async () => {
    const req = await getData();
    console.log(req);
  };

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = parseJwt(token);

      if (!user) {
        localStorage.removeItem("token");
        console("test not loh")
        history("/login", { replace: true });
      } else {
        console("test")
        populateQuote();
      }
    }
  }, []);

  

  return <div>Dashboard</div>;
};

export default Dashboard;
