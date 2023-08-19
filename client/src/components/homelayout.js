import { Navigate, useOutlet,Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/home" replace />;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a href="#" className="navbar-brand">Brand</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link to={"/"} className="nav-item nav-link active">Home</Link>
                <Link to={"/about"} className="nav-item nav-link">About</Link>
                {/* <Link to={"/registry"} className="nav-item nav-link">Registry</Link> */}
                <Link to={"/gallery"} className="nav-item nav-link">Gallery</Link>
                <Link to={"/contact"} className="nav-item nav-link">Contact</Link>
            </div>
            <div className="navbar-nav ms-auto">
                <Link to={"/login"} className="nav-item nav-link">Login</Link>
                <Link to={"/register"} className="nav-item nav-link">Register</Link>
            </div>
        </div>
    </div>
      </nav>
      {outlet}
    </div>
  );
};