import {useEffect, useState} from 'react';
import { Route,Routes,Link, useParams } from 'react-router-dom';
import "../../css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import areaService from '../../services/area.service';
import doctorServices from '../../services/doctor.services';
import AreaDataService from '../../services/area.service';
export default function AreaList(props){
  const[areamanager,setAreaManager]=useState([]);
  let {EmpId}=useParams();
  const getAll=async ()=>{
    await AreaDataService.getAreaManagerAll(EmpId)
     .then((response) => {

       setAreaManager(response.data);
       //alert(areamanager);
     })
     .catch((e) => {
       alert(e);
     });
   }
      
      useEffect(()=>{
        
         getAll();
        
      })
      const deleterecord =async (id) =>{
        await areaService.remove(id)
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
            <li class="breadcrumb-item active admin_text">Area Manager List
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <div className='row'>
    <div className='col-md-12'>
     <div className='row'>
      <div className='col-md-4'>

      <div className="form">
              <label htmlFor="Search" placeholder='Search by phoneno'></label>
              <input
                type="text"
                placeholder='Search by FullName'
               
                id="title"
                required
                value={""}
                onKeyUp={""}
                onChange={""}
                name="title"
              />
            </div>

      </div> 
      <div className='col-md-4'>
        
      </div>
      <div className='col-md-4'>
        
      </div>
     </div>
    </div>
    
  </div>
    
            
      
      <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
        <th> AempId</th>
        <th> FullName</th>
        <th>Designation</th>
        <th>Password</th>
        <th>State</th>
        <th>Action</th>
       
        </tr>
        </thead>
        <tbody>
          {areamanager.map((obj)=>(
            <tr><td>{obj.AempId}</td>

            <td>{obj.full_name}</td>
            <td>{obj.designation}</td>
            <td>{obj.password}</td>
            <td>{obj.state}</td>
            <td>
            <Link to={"/dashboard/mrmanager/"+obj.AempId} className="btn btn-success">view</Link>
            </td>
            <td className='btn btn-danger' onClick={() =>deleterecord(obj.id)}>delete</td>
            <td className='btn btn-primary'>edit</td>
            

           
            </tr>
          ))}
        </tbody>
      </table>
      
      

      </div>
        </div>
    );
}