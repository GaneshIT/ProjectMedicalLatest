import {Link,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import DoctoryList from './doctor-list';
import RegionalList from './regional-list';
import Administrator from './administrator';
import DashboardHome from './home';
function Index() {
  return (
    <div>
     <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a href="#" className="navbar-brand">Brand</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link to={"/hypertension-registry/"} className="nav-item nav-link active">Home</Link>
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
        <div className="container mt-3">
          <Routes>
            <Route path="/hypertension-registry/home" element={<DashboardHome></DashboardHome>}></Route>
            <Route path="/doctoryList" element={<DoctoryList></DoctoryList>}></Route>
            <Route path="/adminlist" element={<Administrator></Administrator>}></Route>
            <Route path="/regionallist" element={<RegionalList></RegionalList>}></Route>
          </Routes>
        </div>
      
     </div>
    </div>
  );
}

export default Index;
