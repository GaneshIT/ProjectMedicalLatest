import http from "../http-common";
  class MrDataService {
    getAll(search,status,state) {
        if(search!="" )
        return http.get("/mrlist?FullName="+search+"&status="+status+"&state="+state);
          else
        return http.get("/mrlist");
    
        
      }
      getMrManagerAll(id) {
        return http.get("/mrlist?AempId="+id);

    
        
      }
      getStates() {
        return http.get("/states");    
      }
      delete(id) {
        return http.delete(`/mrmanager/${id}`);
      }
      update(data) {
        return http.put(`/mrmanager/${data.id}`,data);
      }
      remove =async (EmpId) => {
        return await http.delete(`/mrmanager/${EmpId}`);
        
      };
  
      
    }
    export default new MrDataService()