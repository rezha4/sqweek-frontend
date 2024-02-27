import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Sidebar />
    </>
  );
};

export default Home;
