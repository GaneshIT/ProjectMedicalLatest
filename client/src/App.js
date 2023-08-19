import React,{Fragment} from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HomeLayout } from './components/homelayout';
import { AuthLayout } from './authlayout';

import Home from './components/hypertension/home';
import About from './components/hypertension/about';
import Registry from './components/hypertension/registry';
import Gallery from './components/hypertension/gallery';
import Contact from './components/hypertension/contact';
import Login from './components/hypertension/login';
import AdminLogin from './components/hypertension/adminlogin';
import Register from './components/hypertension/register';
import { ProtectedLayout } from './PrivateRoute';
import { ProtectedLayout2 } from './PrivateRoute2';
// import Index from './components/hypertension-registry';
// import AuthContextProvider, { AuthProvider } from './AuthContext';
import DoctoryList from './components/hypertension-registry/doctor-list';
import AdministratorList from './components/hypertension-registry/administrator';
import ManagerList from './components/hypertension-registry/regional-list';
import AreaList from './components/hypertension-registry/areamanger';
import MrList from './components/hypertension-registry/mrmanager';
import form from './components/hypertension-registry/editform';
import form1 from './components/hypertension-registry/adminedit';
import newadmin from './components/hypertension-registry/newadmin';
import DashboardHome from './components/hypertension-registry/home';


import DoctorHome from './components/doctors_login/doctorhome';
import DoctorFollowupcase from './components/doctors_login/doctors_followupcases';
import DoctorIncompleteforms from './components/doctors_login/doctors_incompleteforms';
import DoctorNewcase from './components/doctors_login/doctors_newcase';

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

// for error
// const getUserData = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 3000)
//   );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        
      </Route>

      <Route path="/dashboard/" element={<ProtectedLayout />}>
      <Route path="/dashboard/home" element={<DashboardHome/>} />
        <Route path="/dashboard/doctoryList" element={<DoctoryList />} />
        <Route path="/dashboard/adminlist" element={<AdministratorList />} />
        <Route path="/dashboard/regionallist" element={<ManagerList />} />
        <Route exact path="/dashboard/areamanager/:EmpId" Component={AreaList} />
        <Route exact path="/dashboard/mrmanager/:AempId" Component={MrList} />
        <Route exact path="/dashboard/editform" Component={form} />
        <Route exact path="/dashboard/adminedit/:id" Component={form1} />
        <Route exact path="/dashboard/newadmin/" Component={newadmin} />

      </Route>
      <Route path="/dashboard/" element={<ProtectedLayout2 />}>
      <Route path="/dashboard/doctorhome" element={<DoctorHome/>} />
        <Route path="/dashboard/doctors_followupcases" element={<DoctorFollowupcase />} />
        <Route path="/dashboard/doctors_incompleteforms" element={<DoctorIncompleteforms />} />
        <Route path="/dashboard/doctors_newcase" element={<DoctorNewcase />} />
        

      </Route>
      
    </Route>
  )
);