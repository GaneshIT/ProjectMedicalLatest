import { Navigate, useOutlet,Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";

export const ProtectedLayout2 = () => {
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
                <Link to={"/dashboard/doctorhome"} className="nav-item nav-link">Home</Link>
                <Link to={"/dashboard/doctors_newcase"} className="nav-item nav-link">New case</Link>
                <Link to={"/dashboard/doctors_incompleteforms"} className="nav-item nav-link">Incomplete forms</Link>
                <Link to={"/dashboard/doctors_followupcases"} className="nav-item nav-link">Follow-up Case</Link>
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