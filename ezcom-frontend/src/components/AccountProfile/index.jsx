import React, { useState, useEffect } from "react";
import pic from "../../img/p1.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function index() {
    const [isOpen, setIsOpen] = useState(false);
    const [storedUser, setStoredUser] = useState("");
    const [storedUserImage, setStoredUserImage] = useState("");
    const [storedUserRole, setStoredUserRole] = useState("");
    const [userRole, setUserRole] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    function success(text) {
        toast.success(text);
    }
    function fail(text) {
        toast.error(text);
    }

    useEffect(() => {
        setStoredUser(JSON.parse(localStorage.getItem("user-name")));
        setStoredUserImage(JSON.parse(localStorage.getItem("user-image")));
        setStoredUserRole(JSON.parse(localStorage.getItem("user-role")));
    }, []);

    const logoutHandler = () => {
        localStorage.clear();
        navigate("/login");
    };

    const checkValidateHandler = async () => {
        const token = localStorage.getItem("access-token");
        console.log(token);
        try {
            const response = await axios.get(
                `https://ezcom-backend-production-09b5.up.railway.app/auth/validate`,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            const responseRole = await axios.get(
                `https://ezcom-backend-production-09b5.up.railway.app/user/user`,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            success("login already");
            console.log(response.data);
            console.log("Role", responseRole.data.Role);

            if (responseRole.data.Role === "admin") setUserRole(true);
        } catch (error) {
            fail("not login yet");
            console.error("Fetch Error", error);
        }
    };

    return (
        <div
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="relative inline-block text-left "
        >
            <ToastContainer position="top-center" theme="dark" />
            {storedUser ? (
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="px-4 py-2 font-medium text-white bg-primary border-[2px] border-transparent hover:border-orange-700 rounded-md  focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
                >
                    <div className="h-[35px] flex">
                        <img
                            src={storedUserImage}
                            className="max-w-full max-h-full mr-2 rounded-full "
                        />
                        <div className="my-auto text-xl">{storedUser}</div>
                    </div>
                </button>
            ) : (
                <button
                    onClick={logoutHandler}
                    type="button"
                    className="px-4 py-2 font-medium text-white bg-primary border-[2px] border-transparent hover:border-orange-700 rounded-md  focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
                >
                    <div className="h-[35px] flex">
                        <div className="my-auto text-xl">Login</div>
                    </div>
                </button>
            )}

            {/* Apply transition classes to create animation */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } absolute right-0 w-48 bg-400 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out`}
            >
                <ul className="py-2">
                    {storedUserRole == "admin" && (
                        <li>
                            <a
                                href="/admin"
                                className="block px-4 py-2 text-slate-300 hover:bg-gray-100"
                            >
                                Admin
                            </a>
                        </li>
                    )}
                    {storedUser && (
                        <div>
                            <li>
                                <a
                                    href="/profile"
                                    className="block px-4 py-2 text-slate-300 hover:bg-gray-100"
                                >
                                    Profile
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-slate-300 hover:bg-gray-100"
                                    onClick={checkValidateHandler}
                                >
                                    Check Validate
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-red-400 hover:bg-gray-100"
                                    onClick={logoutHandler}
                                >
                                    Log out
                                </a>
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default index;
