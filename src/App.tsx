

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="flex mb-5  gap-3 justify-end">
        <Link to={'/login'}>login</Link>
        <Link to={'/register'}>Register</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
