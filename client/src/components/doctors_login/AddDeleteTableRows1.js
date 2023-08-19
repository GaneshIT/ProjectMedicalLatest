import { useState } from "react"
import TableRows1 from "./TableRows1"
function AddDeleteTableRows1(){


    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            slno:'',
            datetime:'',
            systolicbloodpressure:'',
            diastollicbloodpressure:'' ,
            remarks:'' 
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  
 
 
}
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">

                <table className="table">
                    <thead>
                      <tr>
                          <th>Sl No</th>
                          <th>Date & Time</th>
                          <th>Systolic Blood Pressure</th>
                          <th>Diastolic Blood Pressure</th>
                          <th>Remarks</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >Add new row</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <TableRows1 rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   </tbody> 
                </table>

                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </div>
    )

}
export default AddDeleteTableRows1;