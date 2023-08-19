function TableRows1({rowsData, deleteTableRows, handleChange}) {


    return(
        (rowsData)?
        rowsData.map((data, index)=>{
            const {slno, datetime,systolicbloodpressure ,diastolicbloodpressure,remarks}= data;
            return(

                <tr key={index}>
                <td>
               <input type="number" value={slno} onChange={(evnt)=>(handleChange(index, evnt))} name="slno" className="form-control"/> </td>
                <td><input type="date" value={datetime}  onChange={(evnt)=>(handleChange(index, evnt))} name="medicationname" className="form-control"/> </td>
                <td><input type="number" value={systolicbloodpressure}  onChange={(evnt)=>(handleChange(index, evnt))} name="systolicbloodpressure" className="form-control" /> </td>
                <td><input type="number" value={diastolicbloodpressure}  onChange={(evnt)=>(handleChange(index, evnt))} name="diastolicbloodpressure" className="form-control" /> </td>
                <td><input type="text" value={remarks}  onChange={(evnt)=>(handleChange(index, evnt))} name="remarks" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>delete this row</button></td>
            </tr>

            )
        }):''
   
    )
    
}

export default TableRows1;