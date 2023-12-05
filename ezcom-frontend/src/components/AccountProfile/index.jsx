import React, { useState, useEffect } from "react";
import pic from "../../img/p1.jpg";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux"

function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [storedUser, setStoredUser] = useState("");
  const [storedUserImage, setStoredUserImage] = useState("");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setStoredUser(JSON.parse(localStorage.getItem("user-name")));
    setStoredUserImage(JSON.parse(localStorage.getItem("user-image")));
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="relative inline-block text-left ">
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
          <div className="my-auto text-xl">
            {storedUser ? <div>{storedUser}</div> : <div>Login</div>}
          </div>
        </div>
      </button>

      {/* Apply transition classes to create animation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 mt-2 w-48 bg-300 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out`}
      >
        <ul className="py-2">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-slate-300 hover:bg-gray-100"
            >
              Profile
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
        </ul>
      </div>
    </div>
  );
}

export default index;
