import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
export default class FooterComponent extends Component {
    constructor(props) {
        super();

       
    }
   



    componentDidMount() {

    }
    render() {
        return (
           <div>
             <div className="shop4">
        <div className="container" >
        <div className="row">
        <div class="col-md-2">

            </div>
            <div className="col-md-2">
                    <h4 id="footer_head"><u>QUICK LINKS</u></h4>
                    <ul className="footer">
                      {/* <Link to={"admin-login"}> <li>Admin Login</li></Link> */}
                   <a href='http://localhost:3000/adminlogin'><li>admin</li></a>
                   <a href='http://localhost:3000/login'><li>Login</li></a>
                     <a href= 'http://localhost:3000/register'><li>Register</li></a>
                    <li>Field Force Login</li>
                    </ul>
                </div>
                <div className="col-md-2">
                  
                </div>
                <div className="col-md-2">
                
                    <h4><u>Navigations</u></h4> 
                    <ul className="footer">
                    <a href= 'http://localhost:3000/about'><li>About_registry</li></a>
                    <a href= 'http://localhost:3000/gallery'><li>Gallery</li></a>
                    <a href= 'http://localhost:3000/contact'><li>Contact_us</li></a>
                    </ul>
                    
                </div>
                <div className="col-md-2">
                   
                </div>
                <div className="col-md-2">
                    
                </div>
             

    
        

        </div>
        
       </div>
       <div style={{textAlign:"center"}}>©
       2023, Hypertension Registry
        of India. All rights reserved.
    </div>
       </div>
         
           </div>

        );

    }
}