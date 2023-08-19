import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import regionalServices from "../../services/regional.service";
import { useParams } from "react-router-dom";
 export default function form(){
    // let {id}=useParams();
    const updaterecord =async (id) =>{
        //regionalServices.get(id).then



        await regionalServices.update(id)
         .then((response) => {
           regionalServices.getAll('','','');
         })
         .catch((e) => {
           console.log(e);
         });
         
        
       }
  return(
    <div className="container">
        <div className="form-group">
          <label>Name</label>
            <input type="text" className="form-control" value={""} />
            </div>
            <div className="form-group">
          <label>Email ID</label>
            <input type="email" className="form-control" value={""} />
            </div>
            <div className="form-group">
          <label>Mobile No</label>
            <input type="number" className="form-control" value={""} />
            </div>
            <div className="form-group">
          <label>password</label>
            <input type="password" className="form-control" value={""} />
            </div>
            <div className="form-group">
          <label>confirm password</label>
            <input type="password" className="form-control" value={""} />
            </div>
        <button className="btn btn-primary" onClick={() =>updaterecord}>update</button>
    </div>
  );
}