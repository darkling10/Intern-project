import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Registration from "../src/components/Registration";

function App() {
  return (
    <div className="App">
      <Button>He</Button>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
