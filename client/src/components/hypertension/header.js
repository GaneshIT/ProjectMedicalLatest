import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import leftlogo from '../../assets/images/left-logo.png';
import hyperlogo from '../../assets/images/hyper-logo.png';
import microlapslogo from '../../assets/images/microlabs_logo.png';
export default class HeaderComponent extends Component {
    constructor(props) {
        super();

       
    }
   



    componentDidMount() {

    }
    render() {
        return (
           <div>
             <section>
            <div className="container">
  <div className="row">
    <div className="col-sm-4" >
    <img src={leftlogo}  className="img-responsive" alt="image"  height="70" width="70"/>
    </div>
    <div className="col-sm-6">
    <img src={hyperlogo}  className="img-responsive" alt="image"  height="100" width="100" />
    <span class="logoheader" style={{fontSize:"20px"}} > <b>Hypertension Registry of India </b></span>
    </div>
    <div className="col-sm-2">
    <center><img src={microlapslogo} className="img-responsive" alt="image"  height="60" width="120" /></center>
    </div>
  </div>
</div>
            </section>

        
         
           </div>

        );

    }
}