import {useState,useEffect} from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import AdministratorDataService from '../../services/administrator.service';
import form from './editform';
import newadmin from '../hypertension-registry/newadmin';
// import {data} from "../../css/admin.js";
export default function AdministratorList(){
const[administrator,setAdministrator]=useState([]);
const[status,setStatus]=useState(false);

const getAll=async ()=>{
 await AdministratorDataService.getAll()
  .then((response) => {
    setAdministrator(response.data);
    console.log(administrator);
  })
  .catch((e) => {
    console.log(e);
  });
}

useEffect(()=>{
  if(!status){
   getAll();
   setStatus(true);
    console.log(administrator);
  }
   
  
})
const deleterecord =async (id) =>{
  console.log(id)
  await AdministratorDataService.remove(id)
   .then((response) => {
     getAll('','','');
     alert("Are you sure to delete this record");
   })
   .catch((e) => {
     console.log(e);
   });
   
  
 }




    return(
        <div>
          
             <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-12">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active admin_text">Administrator
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
 
            
  <Link to={"/dashboard/newadmin"} className="btn btn-primary">create new admin</Link>
      <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>MobileNo</th>
        <th>IsActive</th>
        <th>Action</th>
       
        </tr>
        </thead>
        <tbody>
          {administrator.map((obj)=>(
            <tr>
             <td>{obj.id}</td>   
            <td>{obj.fullname}</td>
            <td>{obj.email}</td>
            <td>{obj.phone}</td>
            <td>{obj.IsActive}</td>
            <td>
            <Link to={"/dashboard/adminedit/"+obj.id} className="btn btn-success">Edit</Link>
            </td>
             <td className='btn btn-danger'onClick={() =>deleterecord(obj.id)} >delete</td>

           
            </tr>
          ))}
        </tbody>
      </table>
      

      </div>
        </div>
    );
}