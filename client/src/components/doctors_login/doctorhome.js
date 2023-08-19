import { Route,Routes,Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import plus from '../../../src/assets/images/plus.jpeg';
export default function DoctorHome(){
   
return(
    <div>
    <div className="row">
        <div className="col-md-3">
        <div class="card" style={{width:"18rem"}}>
<img src={plus} class="card-img-top" alt="..." style={{width:"10rem"}}/>
<div class="card-body">
  <h5 class="card-title">Add New Case</h5>
 
  <Link to={"/dashboard/doctors_newcase"} className="btn btn-primary">Add New Case</Link>
</div>
</div>
        </div>
        <div className="col-md-3">
            <div class="card" style={{width:"18rem"}}>
<img src={plus} class="card-img-top" alt="..." style={{width:"10rem"}}/>
<div class="card-body">
  <h5 class="card-title"> View Incomplete Forms</h5>
 
  <Link to={"/dashboard/doctors_incompleteforms"} className="btn btn-primary">View Incomplete Forms</Link>
</div>
</div>
        </div>
        <div className="col-md-3">
        <div class="card" style={{width:"18rem"}}>
<img src={plus} class="card-img-top" alt="..." style={{width:"10rem"}}/>
<div class="card-body">
  <h5 class="card-title"> Add Follow_up Case</h5>
 
  <Link to={"/dashboard/doctors_followupcases"} className="btn btn-primary">Add Follow_up Case</Link>
</div>
</div> 
        </div>
        <div className="col-md-3">
        <div class="card" style={{width:"18rem"}}>
<img src={plus} class="card-img-top" alt="..." style={{width:"10rem"}}/>
<div class="card-body">
  <h5 class="card-title">Download Case Report Form</h5>
  
  <Link to={""} className="btn btn-primary">Download Case Report</Link>
</div>
</div>
        </div>
     
    </div>
    
    </div>
);
}

