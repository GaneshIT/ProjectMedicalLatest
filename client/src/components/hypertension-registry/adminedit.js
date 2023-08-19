import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AdministratorDataService from '../../services/administrator.service';
import withRouter from "../withRouter";
class Addadmin extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeFullname= this.onChangeFullname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone= this.onChangePhone.bind(this);
    this.editAdmin = this.editAdmin.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeConfirm_password= this.onChangeConfirm_password.bind(this);

    
    this.saveAdmin = this.saveAdmin.bind(this);
    this.newAdmin = this.newAdmin.bind(this);

    this.state = {
      id: null,
      fullname: "",
      email: "", 
      phone: "",
      password: "",
      confirm_password: "",

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
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeConfirm_password(e) {
    this.setState({
      confirm_password: e.target.value
    });
  }
  getById(){
    AdministratorDataService.getAll()
    .then((response) => {
      for(let i=0;i<response.data.length;i++){
        if(response.data[i].id==this.props.params.id){
        this.setState({
          id: response.data[i].id,
         fullname: response.data[i].fullname,
          email: response.data[i].email,
          phone: response.data[i].phone,
          password: response.data[i].password,
          confirm_password: response.data[i].confirm_password
        });
      }
      }
      
      console.log(response.data);
    
    })
    .catch((e) => {
      console.log(e);
    });
  }
  update(){
    var data = {
id:this.state.id,
      fullname: this.state.fullname,
       email: this.state.email,
       phone: this.state.phone,
       password: this.state.password,
       confirm_password: this.state.confirm_password
     
       
     };
    AdministratorDataService.update(this.state.id,data)
  .then((response) => {
  //this.setState(response.data)
  alert("working");
  })
  .catch((e) => {
    console.log(e);
  });
  }
componentDidMount(){
   this.getById()
}
  saveAdmin() {
  
   
    var data = {

     fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    
      
    };
if(this.state.id==null){
    AdministratorDataService.create(data)//passing the data
      .then(response => { //then is inbuilt function of axios
        this.setState({
          id: response.data.id,
         fullname: response.data.fullname,
          email: response.data.email,
          phone: response.data.phone,
          password: response.data.password,
          confirm_password: response.data.confirm_password,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
    else
    this.update();
  }
  editAdmin(admin) {
    this.setState({ submitted: false });

    this.setState({ id: admin.id });
    this.setState({ title: admin.fullname });
    this.setState({ description: admin.email });
    this.setState({ description: admin.phone });
    this.setState({ description: admin.password });
    this.setState({ description: admin.confirm_password });
    
    
    this.setState({ published: admin.published });
  }

  newAdmin() {
    this.setState
  ({
      id: null,
     fullname: "",
      email: "", 
      phone: "",
      password: "",
      confirm_password: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ?(
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newAdmin}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.fullname}
                onChange={this.onChangeFullname}
               fullname="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
               fullname="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              <input
                type="number"
                className="form-control"
                id="email"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
               fullname="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
               fullname="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm_password</label>
              <input
                type="password"
                className="form-control"
                id="confirm_password"
                required
                value={this.state.confirm_password}
                onChange={this.onChangeConfirm_password}
               fullname="confirm_password"
              />
            </div>




            <button onClick={this.saveAdmin} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Addadmin);