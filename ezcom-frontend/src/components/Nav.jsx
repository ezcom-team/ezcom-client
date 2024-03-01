import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import AccountProfile from "./AccountProfile/index.jsx";

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
            case "/Filter":
                buttonName = "filter";
                break;
            case "/login":
                buttonName = "login";
                break;
            case "/MyOrder":
                buttonName = "myorder";
                break;
            case "/progress":
                buttonName = "progress";
                break;
            default:
                buttonName = null;
        }

        setSelectedButton(buttonName);
    }, [location]);

    return (
        <nav className="bg-300 text-100 min-h-[60px] py-2 justify-center">
            <div className="flex w-[95%] justify-between">
                <div className="flex ml-5 gap-7 box">
                    <Link
                        className={
                            selectedButton === "ezcom"
                                ? "selected"
                                : " hover:bg-primary px-[5px] py-[2px] rounded-md"
                        }
                        to="/"
                    >
                        Ezcom
                    </Link>
                    <Link
                        className={
                            selectedButton === "landing"
                                ? "selected"
                                : " hover:bg-primary px-[5px] py-[2px] rounded-md"
                        }
                        to="/landing"
                    >
                        Landing
                    </Link>
                    <Link
                        className={
                            selectedButton === "filter"
                                ? "selected"
                                : " hover:bg-primary px-[5px] py-[2px] rounded-md"
                        }
                        to="/Filter"
                    >
                        Filter
                    </Link>

                    <Link
                        className={
                            selectedButton === "login"
                                ? "selected"
                                : " hover:bg-primary px-[5px] py-[2px] rounded-md"
                        }
                        to="/login"
                    >
                        Login
                    </Link>
                    <Link
                        className={
                            selectedButton === "myorder"
                                ? "selected"
                                : " hover:bg-primary px-[5px] py-[2px] rounded-md"
                        }
                        to="/MyOrder"
                    >
                        My-Order
                    </Link>

                    <Link
                        className={
                            selectedButton === "progress"
                                ? "selected"
                                : " hover:bg-primary px-[5px] py-[2px] rounded-md"
                        }
                        to="/progress"
                    >
                        Progress
                    </Link>
                </div>
                <div>
                    <AccountProfile />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
