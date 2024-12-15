import { Link, Outlet } from "react-router-dom";
import { Hamburger } from "./components/Hamburger";

function App() {
  return (
    <>
      <div className="flex">
        <Hamburger />
        <div className="flex flex-col w-full">
          <nav className="flex mb-5  gap-3 justify-end ">
            <Link to={"/login"}>login</Link>
            <Link to={"/register"}>Register</Link>
          </nav>
          <section className="px-8">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
