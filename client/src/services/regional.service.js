import http from "../http-common";

class ManagerDataService {
  getAll(search,status,state) {
    if(search!="" )
    return http.get("/seniormanager?FullName="+search+"&status="+status+"&state="+state);
      else
    
    return http.get("/seniormanager");

    
  }
  getStates() {
    return http.get("/states");    
  }
   remove =async (EmpId) => {
    return await http.delete(`/seniormanager/${EmpId}`);
    
  };
  update =async (EmpId) => {
    return await http.put(`/seniormanager/${EmpId}`);
    
  };
}

export default new ManagerDataService()
