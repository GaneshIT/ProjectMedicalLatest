import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import administratorService from "./services/administrator.service";
import doctorServices from "./services/doctor.services";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data,role) => {
    if(role=="admin"){
    administratorService.login(data)
    .then((response) => {
      if(response.data=="Invalid")
      alert('Invalid email & password!!');
      else{
      setUser(response);
      navigate("/dashboard/home");}
    })
    .catch((e) => {
      alert(e);
    });
  }
  if(true){}
  else{
    doctorServices.login(data)
    .then((response) => {
      if(response.data=="Invalid")
      alert('Invalid email & password!!');
      else{
      setUser(response);
      navigate("/dashboard/doctorhome");}
    })
    .catch((e) => {
      alert(e);
    });
  }
  } 
  

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
