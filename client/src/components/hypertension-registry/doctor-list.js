import {useEffect, useState} from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import "../../css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorDataService from '../../services/doctor.services';
 var city=[
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];
export default function DoctoryList(){
const[doctors,setDoctors]=useState([]);
const[status,setStatus]=useState('');
const[state,setState]=useState('');
 const[states,setStates]=useState([]);
const[search,setSearch]=useState('');
const[load,setLoad]=useState(false);
const[color,setColor]=useState('');
// const[login,setLogin]=useState(false);
const getAll=(search,state,status)=>{
  console.log('search'+search)
  DoctorDataService.getAll(search,state,status)
  .then((response) => {
    console.log(response.data)
    if(search!='')
    getFilterData(search,state,status);
    else
    setDoctors(response.data);
    console.log(doctors);
  })
  .catch((e) => {
    console.log(e);
  });
}
const getStates=()=>{
  DoctorDataService.getStates()
  .then((response) => {
  setStates(response.data)
  })
  .catch((e) => {
    console.log(e);
  });
}
const getSearch=(e)=>{
  console.log(e.target.value)
  setSearch(e.target.value)
  getAll(search,status,state);
}
const getStatus=(e)=>{
  setStatus(e.target.value)
  getAll(search,status,state);
}
const getState=(e)=>{
  setState(e.target.value)
  getAll(search,status,state);
}

const getFilterData=()=>{
  if(search!=""){
const filteredData=doctors.filter((obj)=>obj.fullname.indexOf(search)!==-1);
setDoctors(filteredData);
  }
  if(state!="")
  {
    const filteredData=doctors.filter((obj)=>obj.State==state);
    setDoctors(filteredData);
      }
      if(status!="")
  {
    const filteredData=doctors.filter((obj)=>obj.Status==status);
    setDoctors(filteredData);
      }
     
}
const updatedStatus=(obj,updateStatus)=>{
  alert(updateStatus);
  obj.status=updateStatus;
 DoctorDataService.update(obj)
 .then((response) => {
  getAll(search,state,status)

  })
  .catch((e) => {
    console.log(e);
  });
}
useEffect(()=>{
  if(!load){
    getStates();
    getAll('','','');    
    console.log(states);
    setLoad(true);
    }
})

    return(
        <div>
             <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-12">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active admin_text">Doctors List
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
                value={search}
                onKeyUp={getSearch}
                onChange={getSearch}
                name="title"
              />
            </div>

      </div> 
      <div className='col-md-4'>
      <select className='form-select' >
 <option >All Status</option>
 <option >Approved</option>
 <option >Rejected</option>
 <option>Pending</option>
</select>

        
      </div>
      <div className='col-md-4'>
      <select className='form-select' >
 <option >states</option>
 {states.map((city)=>(<option>{city}</option>))}
 
</select>
      </div>
     </div>
    </div>
    
  </div>
  <div>
<div className='container' id="nav">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<form class="form-inline my-2 my-lg-0">
      
      <button class="btn btn-primary" type="submit">Download Doctor List</button>
    </form>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
   <button className='btn btn-primary'> <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Download Hypertension Activity Log
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li></button>
      <button className='btn btn-primary'> <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Download Dyslipidemia Activity log
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li></button>
      <button className='btn btn-primary'> <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Download Interesting Case Activity log
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li></button>
      <button className='btn btn-primary'> <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Download Camp Field Case Activity log
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li></button>
    </ul>
   
  </div>
</nav>
</div>
  </div>
    
            
      
      <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
        <th>Id</th>
        <th> fullname</th>
        <th>phone</th>
        <th>register_number</th>
        <th>place</th>
        <th>status</th>
        <th>Action</th>
        <th>register_date</th>
        <th></th>
        </tr>
        </thead>
        <tbody>
          {doctors.map((obj)=>(
            <tr><td>{obj.doctor_id}</td>
            <td>{obj.fullname}</td>
            <td>{obj.phone}</td>
            <td>{obj.register_number}</td>
            <td>{obj.place}</td>
            {(obj.status=="Approved")?(
                              <td className='btn btn-success'>{obj.status}</td>
                              ):(
                                <td className='btn btn-danger'>{obj.status}</td>

                  )}

            <td>
              {(obj.status=="Approved")?(
                  <a className="btn btn-danger" href="#"data-toggle="modal"
                     
                    data-target="#deleteTutorialModal"
                    
                       onClick={() => updatedStatus(obj,"Reject")}>
                    Reject
                  </a>):(
                    <a className="btn btn-success" href="#"data-toggle="modal"
                     
                    data-target="#deleteTutorialModal"
                    
                       onClick={() => updatedStatus(obj,"Approved")}>
                    Approved
                  </a>
                  )}
                </td>
            <td>{obj.register_date}</td>
            <td>
            <select className='form-select' >
 <option >Options</option>
 <option >Furniture</option>
 <option >Electronics</option>
 <option>Mobile</option>
</select>
<select className='form-select' >
 <option >Report</option>
 <option >Furniture</option>
 <option >Electronics</option>
 <option>Mobile</option>
</select></td>
            </tr>
          ))}
       
        </tbody>
      </table>
      

      </div>
      </div>
        
    );
  }
  
