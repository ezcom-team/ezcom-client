import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import Nav from "../components/Nav";
import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { setUser } from "../store/userSlice";
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

      // ตรวจสอบการตอบกลับจาก API
      if (response.status === 200) {
        const cookieValue = document.cookie;
        console.log(response.data.user);
        dispatch(setUser(response.data.user));

        if (cookieValue) {
          console.log(cookieValue);
          // ทำสิ่งที่คุณต้องการด้วย token ที่อ่านได้
        } else {
          console.log("ไม่พบคุกกี้ Authorization");
        }

        // ดึง Token มาใช้งาน
      } else {
        // ดำเนินการเมื่อมีข้อผิดพลาดจาก API
        console.error("Login failed");
      }
    } catch (error) {
      // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
      console.error("Error sending request:", error);
    }
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const handleValidate = async () => {
    try {
      // console.log(Cookies.get("Authorization"));
      const response = await instance.get(
        "https://ezcom-backend-production-09b5.up.railway.app/auth/validate"
      );
      console.log("Login successful");

      console.log(response.data.token);
      if (response.status === 200) {
        console.log(response.data);
      } else {
        // ดำเนินการเมื่อมีข้อผิดพลาดจาก API
        console.error("Validate failed");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-400">
      <Nav />
      <div className="flex flex-col items-center justify-center flex-1 bg-400">
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <h2 class="text-100 flex justify-center">Login</h2>
            <label htmlFor="email" className="text-200">
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-200">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button type="submit" className="text-200">
              Login
            </button>
          </div>
        </form>
        <button onClick={handleValidate} className="text-primary">
          Test validate
        </button>
        {user ? (
          <>
            <p>Welcome, {user.Name}!</p>
          </>
        ) : (
          <>
            <p>Please log in.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;

// function Login() {
//   const count = useSelector(state => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <Nav />
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div className="flex ">
//           <form></form>
//         <h1>Login</h1>
//       </div>
//     </div>
//   );
// }

// export default Login;
