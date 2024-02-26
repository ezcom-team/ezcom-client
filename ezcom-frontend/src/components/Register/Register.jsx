import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
// const FormData = require('form-daata');
const Register = () => {
  let data = new FormData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = e => {
    setFormData({ ...formData, password: e.target.value });

  };
  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  }


  const handleEmailChange = e => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleUsernameChange = e => {
    setFormData({ ...formData, name: e.target.value });
  };

  const isPasswordMatch = () => {
    return formData.password === confirmPassword;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("role", formData.role);

    if (!isPasswordMatch()) {
      console.log("Passwords do not match");
      return;
    }

    try {
      console.log("string" + " : " + formData.name);
      const response = await axios.post(
        "https://ezcom-backend-production-09b5.up.railway.app/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        navigate("/login");
      } else {
        console.error("Register failed");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordFocused(false);
  };

  const emailInputStyle = {
    border: isEmailFocused ? "2px solid #ff6827" : "2px solid transparent",
    transition: "border-color .5s ease",
  };

  const passwordInputStyle = {
    border: isPasswordFocused ? "2px solid #ff6827" : "2px solid transparent",
    transition: "border-color .5s ease",
  };

  const usernameInputStyle = {
    border: isUsernameFocused ? "2px solid #ff6827" : "2px solid transparent",
    transition: "border-color .5s ease",
  };

  const confirmPasswordInputStyle = {
    border: isConfirmPasswordFocused ? "2px solid #ff6827" : "2px solid transparent",
    transition: "border-color .5s ease",
  };


  
  return (
    <div className="flex flex-col items-center flex-1 pt-40 bg-back">
      <form
        onSubmit={handleSubmit}
        className="bg-400 min-w-[500px] rounded-md p-10 mb-10"
      >
        <div className="mb-10 ">
          <h2 class="text-100 flex justify-center text-3xl ">Register</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div
            className="flex flex-col gap-1 px-4 py-2 rounded-md bg-300 "
            style={emailInputStyle}
          >
            <label htmlFor="email" className="text-200">
              Email:
            </label>
            <input
              className="pl-2 font-semibold"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleEmailChange}
              placeholder="Type Your Email"
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            />
          </div>

          <div
            className="flex flex-col gap-1 px-4 py-2 rounded-md bg-300 "
            style={usernameInputStyle}
          >
            <label htmlFor="email" className="text-200">
              Username:
            </label>
            <input
              className="pl-2 font-semibold"
              type="text"
              id="username"
              value={formData.name}
              onChange={handleUsernameChange}
              placeholder="Type Your Username"
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
            />
          </div>

          <div className="flex flex-col gap-1">
            <div
              className="flex flex-col gap-1 px-4 py-2 rounded-md bg-300"
              style={passwordInputStyle}
            >
              <label htmlFor="password" className="text-200">
                Password:
              </label>
              <input
                className="pl-2 font-semibold"
                type="password"
                id="password"
                value={formData.password}
                onChange={handlePasswordChange}
                placeholder="Type your Password"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div
              className="flex flex-col gap-1 px-4 py-2 rounded-md bg-300"
              style={confirmPasswordInputStyle}
            >
              <label htmlFor="password" className="text-200">
                Confirm-Password:
              </label>
              <input
                className="pl-2 font-semibold"
                type="password"
                id="confirmpassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Type your Password"
              onFocus={handleConfirmPasswordFocus}
              onBlur={handleConfirmPasswordBlur}
              />
            </div>
          </div>
          {isPasswordMatch() ? (
            <div className="text-400">{"-"}</div>
          ) : (
            <div className="text-red-600">Passwords do not match</div>
          )}
        </div>
        <div className="flex justify-center mt-7 ">
          <button className="flex min-w-[100%] justify-center bg-primary rounded-xl py-3 mt-3 text-100 text-2xl">
            Register
          </button>
        </div>


        <div className="flex items-end justify-center gap-3 mt-28 text-ce">
          <div className="text-200">Already have an account? </div>
          <Link to="/login" className="text-xl text-primary">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;