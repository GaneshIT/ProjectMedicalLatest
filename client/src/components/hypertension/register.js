import React, { Component } from "react";
import DoctorDataService from "../../services/doctor.services";


export default class AddDoctor extends Component {
  constructor(props) {
    super(props);
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeRegister_number = this.onChangeRegister_number.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.onChangeHospital_name = this.onChangeHospital_name.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCode_number = this.onChangeCode_number.bind(this);
    this.onChangeRegister_date = this.onChangeRegister_date.bind(this);
    this.saveDoctor = this.saveDoctor.bind(this);
    this.newDoctor = this.newDoctor.bind(this);

    this.state = {
      id: null,
      
      fullname: "",
      email: "",
      phone: "",
      register_number: "",
      place: "",
      hospital_name:"",
      password: "",
      state: "",
      city: "",
      code_number: "",
      
      published: true,

      submitted: false
    };
  }

  onChangeFullname(e) {// e is current instance/current text box
    this.setState({//setstate is in second stage
      fullname: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeRegister_number(e) {
    this.setState({
      register_number: e.target.value
    });
  }

  onChangePlace(e) {
    this.setState({
      place: e.target.value
    });
  }
  onChangeHospital_name(e) {
    this.setState({
      hospital_name: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeRegister_date(e) {
    this.setState({
      register_date: e.target.value
    });
  }

  onChangeCode_number(e) {
    this.setState({
      code_number: e.target.value
    });
  }
  saveDoctor() {
  
    
    var data = {
      fullname: this.state.fullname,
      email: this.state.email,
      
    phone: this.state.phone,
    register_number: this.state.register_number,
    place: this.state.place,
    hospital_name: this.state.hospital_name,
    password: this.state.password,
    state: this.state.state,
    city: this.state.city,
    code_number:this.state.code_number,
    };

    DoctorDataService.create(data)//passing the data
      .then(response => { //then is inbuilt function of axios
        this.setState({
          id: response.data.id,
          fullname: response.data.fullname,
          email: response.data.email,
          phone: response.data.phone,
          register_number:response.data.register_number,
          place:response.data.place,
          hospital_name: response.data.hospital_name,
          password:response.data.password,
          state: response.data.state,
          city:response.data.city,
          register_date:response.data.register_date,
          code_number: response.data.code_number,
          status:response.data.status,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDoctor() {
    this.setState
  ({
      id: null,
       
      fullname: "",
      email: "",
      phone: "",
      register_number: "",
      place: "",
      hospital_name:"",
      password: "",
      state: "",
      city: "",
      code_number: "",
      register_date:"",
      status:"",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        <div class="card" style={{width: "18rem", alignContent:"center"}}>
  <div class="card-body">
   
  {this.state.submitted ?(
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newDoctor}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">FullName</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.fullname}
                onChange={this.onChangeFullname}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">email</label>
              <input
                type="email"
                className="form-control"
                id="description"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="register_number">register_number</label>
              <input
                type="text"
                className="form-control"
                id="register_number"
                required
                value={this.state.register_number}
                onChange={this.onChangeRegister_number}
                name="register_number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="place">place</label>
              <input
                type="text"
                className="form-control"
                id="place"
                required
                value={this.state.place}
                onChange={this.onChangePlace}
                name="place"
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospital_name">hospital_name</label>
              <input
                type="text"
                className="form-control"
                id="hospital_name"
                required
                value={this.state.hospital_name}
                onChange={this.onChangeHospital_name}
                name="hospital_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">state</label>
              <input
                type="text"
                className="form-control"
                id="state"
                required
                value={this.state.state}
                onChange={this.onChangeState}
                name="state"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">city</label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={this.state.city}
                onChange={this.onChangeCity}
                name="city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">register_date</label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={this.state.register_date}
                onChange={this.onChangeRegister_date}
                name="city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="code_number">code_number</label>
              <input
                type="text"
                className="form-control"
                id="code_number"
                required
                value={this.state.code_number}
                onChange={this.onChangeCode_number}
                name="description"
              />
            </div>

            <button onClick={this.saveDoctor} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
  </div>
</div>
      </div>
    );
  }
}