import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
