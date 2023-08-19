

import '../../css/home.css';
import HeaderComponent from './header';
import FooterComponent from './footer';
export default function About(){
    return(
        <div>
           <HeaderComponent/>
            <div class="page_container_flt">
      <div class="container">
          <div class="cont_title flt">
             <h1><b>Welcome to Hypertension Registry of India</b></h1>
          </div>
          <div class="cont_desc flt">
              <p>Hypertension is a growing problem in India and causes significant burden on the health system. Further hypertension epidemic in India is complicated by the fact that a large proportion of individuals is unaware of their hypertension status. </p>
              <p>Standardizing hypertension management through an evidence-based model that sets thresholds for diagnosis, treatment goals, follow up intervals and choice of drugs can lead to improved management of hypertension. </p>
              <p>Precisely keeping this in mind we at Micro labs in collaboration with Hypertension Foundation of India have created our country’s first Hypertension Registry. Through this registry we aim to pool data from across India to estimate the overall prevalence and absolute burden of hypertension. Thus, creating reliable information platform about the prevalence of hypertension in different regions of our country which is essential towards the prevention and control of this rising burden.</p>
              <p>We take this opportunity to invite you to be part of this novel which can be an effective tool in the therapeutic armamentarium of managing hypertension in the sub-continent.</p>
          </div>
          <div class="more_info" style={{textAlign:"center"}}>
              <button className='btn btn-secondary' onClick={" "}>Read More</button>
          </div>
      </div>
  </div>
    <div>
    
    <FooterComponent/>
    </div>
    
            
        </div>
    );
}