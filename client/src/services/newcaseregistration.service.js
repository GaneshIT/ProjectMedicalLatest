import http from "../http-common";
class NewcaseregistrationDataService {
   async getAll() {
    return await http.get("/newcaseregistration");
    }
    create(data) {
        return http.post("/newcaseregistration", data);
      }
}
export default new NewcaseregistrationDataService()