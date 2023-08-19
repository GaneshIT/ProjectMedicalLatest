import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes,Link } from 'react-router-dom';
import HeaderComponent from "./header";
import FooterComponent from "./footer";
import leftlogo from '../../assets/images/left-logo.png';
import hyperlogo from '../../assets/images/hyper-logo.png';
import microlapslogo from '../../assets/images/microlabs_logo.png';
import banner1 from '../../assets/images/banner-1.jpg';
import banner2 from '../../assets/images/banner-2.jpg';
import banner3 from '../../assets/images/banner-3.jpg';
import bannerdept1 from '../../assets/images/banner-dept-1.png';
import bannerdept2 from '../../assets/images/banner-dept-2.png';
import bannerdept3 from '../../assets/images/banner-dept-3.png';
import bannerdept4 from '../../assets/images/banner-dept-4.png';

import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';
import brand4 from '../../assets/images/brand4.png';
import brand5 from '../../assets/images/brand5.png';
import brand6 from '../../assets/images/brand6.png';

import brand8 from '../../assets/images/brand8.png';
import brand9 from '../../assets/images/brand9.png';
import '../../css/home.css';

export default class HomeComponent extends Component {
    constructor(props) {
        super();

       
    }
   



    componentDidMount() {

    }
    render() {
        return (
            
           <div>
              {/* <section>
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
            </section> */}
            <HeaderComponent></HeaderComponent>
            
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1}className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner2}className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner3}className="d-block w-100" alt="..."/>
    </div>
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>

    



<div class="page_container_flt">
      <div class="container">
          <div class="cont_title flt">
             <h1><b>Welcome to Hypertension Registry of India</b></h1>
          </div>
          <div class="cont_desc flt">
              <p>Hypertension is a growing problem in India and causes significant burden on the health system. Further hypertension epidemic in India is complicated by the fact that a large proportion of individuals is unaware of their hypertension status. </p>
              <p>Standardizing hypertension management through an evidence-based model that sets thresholds for diagnosis, treatment goals, follow up intervals and choice of drugs can lead to improved management of hypertension. </p>
              <p>Precisely keeping this in mind we at Micro labs in collaboration with Hypertension Foundation of India have created our country’s first Hypertension Registry. Through this registry we aim to pool data from across India to estimate the overall prevalence and absolute burden of hypertension. Thus, creating reliable information platform about the prevalence of hypertension in different regions of our country which is essential towards the prevention and control of this rising burden.</p>
          </div>
          <div class="more_info" style={{textAlign:"center"}}>
          <Link to={"/about"} className="btn btn-secondary">readmore</Link>
          </div>
      </div>
  </div>
        
  <marquee behavior="scroll" direction="left" className="marquee">
    <img src={brand1} width="220" height="100" alt="Natural" className="img1"/>
    <img src={brand2} width="220" height="100" alt="Natural" className="img2"/>
    <img src={brand3} width="220" height="100" alt="Natural"  className="img3"/>
    <img src={brand4} width="220" height="100" alt="Natural" className="img4"/>
    <img src={brand5} width="220" height="100" alt="Natural" className="img5"/>
    <img src={brand6} width="220" height="100" alt="Natural" className="img6"/>
    <img src={brand8} width="220" height="100" alt="Natural" className="img7" />
    <img src={brand9} width="220" height="100" alt="Natural" className="img8"/>
  </marquee>
  <FooterComponent></FooterComponent>
   
  

  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
         
           </div>

        );

    }
}
