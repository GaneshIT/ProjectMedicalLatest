import { useState } from "react"
import RowTable from "./RowTable"
 export default function AddTable(){


    const [rowsData, setRowsData] = useState([]);
 
    const addRowTable = ()=>{
  
        const rowsInput={
            slno:'',
            medicationname:'',
            dose:'' ,
            frequency:'' 
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteRowTable = (index)=>{
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
                          <th>Medication Name</th>
                          <th>Dose</th>
                          <th>Frequency</th>
                          <th><button className="btn btn-outline-success" onClick={addRowTable} >Add new row</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <RowTable rowsData={rowsData} deleteTableRows={deleteRowTable} handleChange={handleChange} />

                   </tbody> 
                </table>

                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </div>
    )

}
