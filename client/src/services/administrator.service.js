import http from "../http-common";
class AdministratorDataService {
   async getAll() {
    return await http.get("/admins");
    }
    login(data) {
        return http.post("/admins/login",data);
        }
        register(data) {
            return http.post("/admins/register",data);
            }
            
             create(data) {
                return http.post("/admins/register", data);
              }
              remove =async (EmpId) => {
                return await http.delete(`/admins/${EmpId}`);
                
              };
            
              update =async (id,data) => {
                return await http.put(`/admins/${id}`,data);
                
              };
              getById(id) {
                return http.get(`/admins?id=${id}`);
              }
}
export default new AdministratorDataService()