// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import Login  from "./pages/Login";
import Register from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/Order";
import AddMenuItemForm from './pages/AddMenuItemForm';
import { OrderComplete } from "./pages/Order-complete";
import { DownloadQR } from "./pages/DownloadQR";


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
      { path: "/order-complete", element: <OrderComplete/> },   
      { path: "/get-qr", element: <DownloadQR/> },   
      { path: "*", element: <NotFound /> },         // 404 fallback route
    ],
  },
]);

export default router;
