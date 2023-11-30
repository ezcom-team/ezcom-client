import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
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
import MyOrder from "./pages/MyOrder.jsx";
import Admin from "./pages/Admin";

import { store } from "./store/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/MyOrder",
    element: <MyOrder />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
