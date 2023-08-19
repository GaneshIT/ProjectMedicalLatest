import http from "../http-common";
class AreaDataService {
    getAll(search,status,state) {
        if(search!="" )
        return http.get("/areamanager?FullName="+search+"&status="+status+"&state="+state);
          else
        return http.get("/areamanager");
    
        
      }
      getAreaManagerAll(id) {
        return http.get("/areamanager?EmpId="+id);

    
        
      }
      getStates() {
        return http.get("/states");    
      }
      delete(id) {
        return http.delete(`/areamanagers/${id}`);
      }
      update(data) {
        return http.put(`/areamanagers/${data.id}`,data);
      }
      remove =async (MempId) => {
        return await http.delete(`/areamanager/${MempId}`);
        
      };
}
export default new AreaDataService()