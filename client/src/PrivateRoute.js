import { Navigate, useOutlet,Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";

export const ProtectedLayout = () => {
  const { user,logout } = useAuth();
  const outlet = useOutlet();
  if (!user) {
    return <Navigate to="/" />;
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
                <Link to={"/dashboard/home"} className="nav-item nav-link">Home</Link>
                <Link to={"/dashboard/doctoryList"} className="nav-item nav-link">Doctor</Link>
                <Link to={"/dashboard/adminlist"} className="nav-item nav-link">Admin</Link>
                <Link to={"/dashboard/regionallist"} className="nav-item nav-link">Regional</Link>
            </div>
            <div className="navbar-nav ms-auto">
            <Link key={"logout"} onClick={logout} className="nav-item nav-link">Logout</Link>
            </div>
        </div>
    </div>
</nav>
      {outlet}
    </div>
  );
};