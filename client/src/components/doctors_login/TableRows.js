function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        (rowsData)?
        rowsData.map((data, index)=>{
            const {slno, medicationname, dose,frequency}= data;
            return(

                <tr key={index}>
                <td>
               <input type="number" value={slno} onChange={(evnt)=>(handleChange(index, evnt))} name="slno" className="form-control"/>
                </td>
                <td><input type="text" value={medicationname}  onChange={(evnt)=>(handleChange(index, evnt))} name="medicationname" className="form-control"/> </td>
                <td><input type="number" value={dose}  onChange={(evnt)=>(handleChange(index, evnt))} name="dose" className="form-control" /> </td>
                <td><input type="text" value={frequency}  onChange={(evnt)=>(handleChange(index, evnt))} name="frequency" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>delete this row</button></td>
            </tr>

            )
        }):''
   
    )
    
}

export default TableRows;