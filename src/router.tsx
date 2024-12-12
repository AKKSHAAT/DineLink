// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import Login  from "./pages/Login";
import Register from "./pages/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // The main layout component
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFound /> },         // 404 fallback route
    ],
  },
]);

export default router;
