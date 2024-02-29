import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // เพิ่ม import เข้ามา
// import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Landing from "./pages/Landing.jsx";
import Detail from "./pages/Detail.jsx";
import MyOrder from "./pages/MyOrderPage.jsx";
import Admin from "./pages/Admin";
import Progress from "./pages/ProgressPage.jsx";
import Register from "./pages/RegisterPage.jsx";

import { store } from "./store/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import Profile from "./pages/Profile.jsx";
import { Compare } from "./pages/Compare";
import { AdvanceFilter } from "./pages/AdvanceFilter.jsx";

// สร้าง theme สำหรับ dark mode
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#d85610", // สี primary ที่ต้องการ
        },
        secondary: {
            main: "#ff00a2", // สี secondary ที่ต้องการ
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
    {
        path: "/landing",
        element: <Landing />,
    },
    {
        path: "/Filter",
        element: <AdvanceFilter />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/MyOrder",
        element: <MyOrder />,
    },
    {
        path: "/Compare/:id",
        element: <Compare />,
    },
    {
        path: "/Admin",
        element: <Admin />,
    },
    {
        path: "/Progress",
        element: <Progress />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/Profile",
        element: <Profile />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
