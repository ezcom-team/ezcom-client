import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { setUser } from "../store/userSlice";
import "./login.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
const instance = axios.create({
  baseURL: "https://ezcom-backend-production-09b5.up.railway.app",
  withCredentials: true, // ตรวจสอบการตั้งค่านี้
  // อื่น ๆ
});

function Login() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useState({});
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    // ทำการตรวจสอบชื่อผู้ใช้และรหัสผ่าน และดำเนินการตามต้องการ (เช่น ส่งคำขอ API ไปยังเซิร์ฟเวอร์)
    try {
      // สร้าง request ด้วย Axios
      const response = await instance.post("/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      // ตรวจสอบการตอบกลับจาก API
      if (response.status === 200) {
        const cookieValue = document.cookie;
        console.log(response.data.user);
        setDataUser(response.data.user);
        dispatch(setUser(response.data.user));
        localStorage.setItem(
          "user-id",
          JSON.stringify(response.data.user.ID)
        );
        localStorage.setItem(
          "user-name",
          JSON.stringify(response.data.user.Name)
        );
        if (response.data.user.File === "") {
          localStorage.setItem(
            "user-image",
            JSON.stringify("https://github.com/identicons/sumetsm.png")
          );
        } else {
          localStorage.setItem(
            "user-image",
            JSON.stringify(response.data.user.File)
          );
        }
        localStorage.setItem("access-token", response.data.token);
        // localStorage.setItem("access-token", response.data.token);

        if (response.data.token) {
          console.log("your token is ", response.data.token);
          // ทำสิ่งที่คุณต้องการด้วย token ที่อ่านได้
        } else {
          console.log("ไม่พบคุกกี้ token");
        }

        // ดึง Token มาใช้งาน
        navigate("/landing");
      } else {
        // ดำเนินการเมื่อมีข้อผิดพลาดจาก API
        console.error("Login failed");
      }
    } catch (error) {
      // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
      console.error("Error sending request:", error);
    }
    // console.log(`Username: ${username}, Password: ${password}`);
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

  const emailInputStyle = {
    border: isEmailFocused ? "2px solid #ff6827" : "2px solid transparent",
    transition: "border-color .5s ease",
  };

  const passwordInputStyle = {
    border: isPasswordFocused ? "2px solid #ff6827" : "2px solid transparent",
    transition: "border-color .5s ease",
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <Nav />
      <div className="flex flex-col items-center flex-1 pt-40 bg-back">
        <form
          onSubmit={handleSubmit}
          className="bg-400 min-w-[500px] rounded-md p-10 mb-10"
        >
          <div className="mb-10 ">
            <h2 class="text-100 flex justify-center text-3xl ">Login</h2>
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
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Type Your Email"
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
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
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Type your Password"
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                />
              </div>
              <div className="flex justify-end mr-2 text-sm text-primary">
                <button className="hover:underline">forgot password ?</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-7 ">
            <button className="flex min-w-[100%] justify-center bg-primary rounded-xl py-3 mt-3 text-100 text-2xl">
              Login
            </button>
          </div>

          <div className="flex items-end justify-center gap-3 mt-28 text-ce">
            <div className="text-200">Don't have an account? </div>
            <Link to="/register" className="text-xl text-primary">
              Sign up
            </Link>
          </div>
        </form>
        <div className="flex gap-2 mt-3">
          <button className="text-200 p-4 flex-grow justify-start text-lg rounded-md border-[2px] border-red-500 hover:bg-red-500 duration-500">
            <GoogleIcon />
            <span className="ml-1">Google</span>
          </button>
          <button className="text-200 p-4 flex-grow justify-start text-lg rounded-md border-[2px] border-blue-500 hover:bg-blue-500 duration-500">
            <FacebookIcon />
            <span className="ml-1">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
