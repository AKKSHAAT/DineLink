// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import Login  from "./pages/Login";
import Register from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/order";
import AddMenuItemForm from './pages/AddMenuItemForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // The main layout component
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/dashboard", element: <Dashboard /> },    
      { path: "/menu", element: <Menu /> },    
      { path: "/cart", element: <Cart /> },   
      { path: "/orders", element: <Order /> },   
      { path: "/additem", element: <AddMenuItemForm /> },   
      { path: "*", element: <NotFound /> },         // 404 fallback route
    ],
  },
]);

export default router;
