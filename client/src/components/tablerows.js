function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {sno,name, desc, frequency}= data;
            return(
                <tr key={index}>
                    <td>
               <input type="text" value={sno} onChange={(evnt)=>(handleChange(index, evnt))} name="sno" className="form-control"/>
                </td>
                <td>
               <input type="text" value={name} onChange={(evnt)=>(handleChange(index, evnt))} name="name" className="form-control"/>
                </td>
                <td><input type="text" value={desc}  onChange={(evnt)=>(handleChange(index, evnt))} name="desc" className="form-control"/> </td>
                <td><input type="text" value={frequency}  onChange={(evnt)=>(handleChange(index, evnt))} name="frequency" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            )
        })
   
    )
    
}
export default TableRows;