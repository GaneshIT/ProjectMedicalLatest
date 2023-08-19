import {useEffect,useState} from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ManagerDataService from '../../services/regional.service';
import form from './editform';
export default function ManagerList(){
const[seniormanager,setSeniorManager]=useState([]);
const[status,setStatus]=useState('');
const[state,setState]=useState('');
const[states,setStates]=useState([]);
const[search,setSearch]=useState('');
const[load,setLoad]=useState(false);

// const[login,setLogin]=useState(false);
const getAll=(search,state,status)=>{
  console.log('search'+search)
 ManagerDataService .getAll(search,state,status)
  .then((response) => {
    console.log(response.data)
    if(search!='')
    getFilterData(search,state,status);
    else
    setSeniorManager(response.data);
    console.log(seniormanager);
  })
  .catch((e) => {
    console.log(e);
  });
}
const getStates=()=>{
  ManagerDataService.getStates()
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
const deleterecord =async (id) =>{
 await ManagerDataService.remove(id)
  .then((response) => {
    getAll('','','');
    alert("Are you sure to delete this record");
  })
  .catch((e) => {
    console.log(e);
  });
  
 
}
const getFilterData=()=>{
  if(search!=""){
const filteredData=seniormanager.filter((obj)=>obj.fullname.indexOf(search)!==-1);
setSeniorManager(filteredData);
  }
  if(state!="")
  {
    const filteredData=seniormanager.filter((obj)=>obj.State==state);
    setSeniorManager(filteredData);
      }
      if(status!="")
  {
    const filteredData=seniormanager.filter((obj)=>obj.Status==status);
    setSeniorManager(filteredData);
      }
     
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
            <li class="breadcrumb-item active admin_text">Senior Manager List
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
        <th> EMPId</th>
        <th> FullName</th>
        <th>Designation</th>
        <th>Password</th>
        <th>State</th>
        <th>Action</th>
       
        </tr>
        </thead>
        <tbody>
          {/* {
            obj
            .filter((obj)=>{
              return search.toLowerCase()===''
              ?obj
              :obj.full_name.toLowerCase().includes(search);
            })
          } */}
          {seniormanager.map((obj)=>(

            <tr><td>{obj.emp_id}</td>
            <td>{obj.full_name}</td>
            
            <td>{obj.designation}</td>
            <td>{obj.password}</td>
            <td>{obj.state}</td>
            <td>
            <Link to={"/dashboard/areamanager/"+obj.EmpId} className="btn btn-success">View</Link>
            </td>
            <td className='btn btn-danger' onClick={() =>deleterecord(obj.id)}>Delete</td>
            
            <td>
            <Link to={"/dashboard/editform"} className="btn btn-primary">Edit</Link>
            </td>
           
            

           
            </tr>
          ))}
        </tbody>
      </table>

     
      

      </div>
        </div>
    );
}