import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="mb-5 bg-black">
        <div className="mb-5">
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
