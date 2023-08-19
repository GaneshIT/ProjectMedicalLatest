import http from "../http-common";

class DoctorDataService {
  login(data) {
    return http.post("/doctors/login",data);
    }
  getAll(search,status,state) {
    if(search!="" )
    return http.get("/doctors?FullName="+search+"&status="+status+"&state="+state);
      else
    return http.get("/doctors");

    
  }
  getStates() {
    return http.get("/states");    
  }
  delete(id) {
    return http.delete(`/doctors/${id}`);
  }
  update(data) {
    return http.put(`/doctors/${data.id}`,data);
  }
  create(data) {
    return http.post("/doctors", data);
  }


}

export default new DoctorDataService()
