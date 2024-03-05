import React from "react";
import Nav from "../components/Nav";
import Register from "../components/Register/Register";
import Verify from "../components/Modal/Verify";



function RegisterPage() {
  return (
    <div className="bg-back min-h-screen">
      <Nav />
      <Register />
    </div>
  );
}

export default RegisterPage;
