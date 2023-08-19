import { useState } from "react";
import TableRows from "./tablerows";
export default function TableData(){
    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            sno:0,
            name:'',
            desc:'',
            frequency:0  
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 const save=async ()=>{
    //var result=(rowsData.map((obj)=>Object.keys(obj).map(key=>{key+','+obj[key]})))
    var data={"medications":rowsData}
    await fetch("http://localhost:8080/api/medications",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then( Response=>Response.json())
        .then(result=>alert('inserted'));

 }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  
 
 
}
    return(
        <div className="container">
            <button onClick={save}>Save</button>
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                      <th>Sno</th>
                          <th>Name</th>
                          <th>Desc</th>
                          <th>frequency</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>
                    </thead>
                   <tbody>
                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    );
}