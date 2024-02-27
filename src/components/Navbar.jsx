import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md justify-center items-center">
      <div>
        <Link to={"/"} className="text-xl font-bold flex items-center">
          <img src="../public/logo.ico" alt="sqweek" className="w-auto h-8 mr-2" />
          Sqweek
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
