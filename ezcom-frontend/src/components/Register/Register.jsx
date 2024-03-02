import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
// const FormData = require('form-daata');
const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    name: "",
    email: "",
    password: "",
    role: "user",
    address: "",
    phoneNumber: "",
  });

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password" || name === "confirmPassword") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isPasswordMatch = () => {
    return formData.password === formData.confirmPassword;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);

    // Concatenate first name and last name into a single field
    const fullName = `${formData.fname} ${formData.lname}`;
    const fullAddress = `${formData.address} ${formData.zip}`;

    // console.log("fullname", fullName)
    // Create a new object with the updated formData
    const updatedFormData = {
      ...formData,
      name: fullName,
      address: fullAddress,
    };
    console.log("Updateformdata: ", updatedFormData);

    delete updatedFormData.confirmPassword;
    delete updatedFormData.zip;

    // Remove fname and lname from updatedFormData
    delete updatedFormData.fname;
    delete updatedFormData.lname;

    try {
      // console.log("string" + " : " + updatedFormData.name);
      const response = await axios.post(
        "https://ezcom-backend-production-09b5.up.railway.app/auth/register",
        updatedFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("resposedata:", response.data);
        navigate("/login");
      } else {
        console.error("Register failed");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="flex flex-col items-center flex-1 pt-10 bg-back">
      <form className="bg-400 p-10 rounded-lg " onSubmit={handleSubmit}>
        <div className="flex justify-center text-2xl text-orange-500 mb-6">Register</div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-200 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              name="fname"
              className="bg-300 border border-gray-300 text-100 text-sm rounded-lg   block w-full p-2.5 da"
              placeholder="John"
              required
              onChange={handleChange}
              value={formData.fname}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-200 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="lname"
              className="bg-300 border border-gray-300 text-100 text-sm rounded-lg  block w-full p-2.5 "
              placeholder="Doe"
              required
              onChange={handleChange}
              value={formData.lname}
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-200 "
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-300 border border-gray-300 text-100 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="john.doe@company.com"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="mt-6">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-200 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="bg-300 border border-gray-300 text-100 text-sm rounded-lg block w-full p-2.5 "
                placeholder="085xxxxxxx"
                pattern="[0-9]{10}"
                required
                onChange={handleChange}
                value={formData.phoneNumber}
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block mb-2 text-sm font-medium text-200 dark:text-white"
              >
                Post Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                pattern="[0-9]{5}"
                className="bg-300 border border-gray-300 text-100 text-sm rounded-lg  block w-full p-2.5 "
                placeholder=""
                required
                onChange={handleChange}
                value={formData.zip}
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-200 dark:text-white"
          >
            Address
          </label>
          <textarea
            id="message"
            name="address"
            rows="4"
            className="block p-2.5 w-full text-sm text-200 bg-300 rounded-lg   "
            placeholder="Write your thoughts here..."
            onChange={handleChange}
            value={formData.address}
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-200 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-300 border border-gray-300 text-100 text-sm rounded-lg   block w-full p-2.5 "
            placeholder="•••••••••"
            required
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-200 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirmPassword"
            className="bg-300 border border-gray-300 text-100 text-sm rounded-lg   block w-full p-2.5 "
            placeholder="•••••••••"
            required
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-300 "
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-200 "
          >
            I agree with the{" "}
            <a
              href="javascript:void(0)"
              className="text-primary hover:underline "
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <div>
        <button
          type="submit"
          className="text-white bg-primary hover:bg-orange-700  font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center "
          
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
