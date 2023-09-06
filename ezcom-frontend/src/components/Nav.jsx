import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    const pathname = location.pathname;
    let buttonName = null;

    switch (pathname) {
      case "/":
        buttonName = "ezcom";
        break;
      case "/landing":
        buttonName = "landing";
        break;
      case "/about":
        buttonName = "detail";
        break;
      case "/testRedux":
        buttonName = "test";
        break;
      case "/MyOrder":
        buttonName = "myorder";
        break;
      default:
        buttonName = null;
    }

    setSelectedButton(buttonName);
  }, [location]);

  return (
    <nav className="bg-400 text-100 min-h-[60px] py-2">
      <div className="flex gap-7 ml-5 box">
        <Link
          className={selectedButton === "ezcom" ? "selected" : ""}
          to="/"
        >
          Ezcom
        </Link>
        <Link
          className={selectedButton === "landing" ? "selected" : ""}
          to="/landing"
        >
          Landing
        </Link>
        <Link
          className={selectedButton === "detail" ? "selected" : ""}
          to="/about"
        >
          Detail
        </Link>
        <Link
          className={selectedButton === "test" ? "selected" : ""}
          to="/testRedux"
        >
          Test-Redux
        </Link>
        <Link
          className={selectedButton === "myorder" ? "selected" : ""}
          to="/MyOrder"
        >
          MyOrder
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
