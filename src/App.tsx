import { Link, Outlet } from "react-router-dom";
import { Hamburger } from "./components/Hamburger";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex">
        <Hamburger />
        <div className="flex flex-col w-full">
          <NavBar />
          <section className="px-8">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
