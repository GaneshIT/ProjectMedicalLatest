import "bootstrap/dist/css/bootstrap.min.css";
import AddDeleteTableRows from "./AddDeleteTableRows";
import TableRows from "./TableRows";
import { education,states,gender,occupation,socio_economic, cities } from "../../data/data";
// import AddTable from "./addtable";
// import RowTable from "./RowTable";
import AddDeleteTableRows1 from "./AddDeleteTableRows1";
import TableRows1 from "./TableRows1";
import App from './checkbox';
import {useEffect, useState} from 'react';
import NewcaseregistrationDataService from "../../services/newcaseregistration.service";


export default function DoctorNewcase(){
  const[fullname,setFullname]=useState('');
  const[email,setEmail]=useState('');
  const[place,setPlace]=useState('');

  const[text1,setText1]=useState('');
  const[text2,setText2]=useState('');
  const[text3,setText3]=useState('');
  const[text4,setText4]=useState('');
  const[text5,setText5]=useState('');
  const[text6,setText6]=useState('');
  const[text7,setText7]=useState('');
  const[text8,setText8]=useState('');
  const[text9,setText9]=useState('');
  const[save,setSave]=useState('');

  function handleChange1(e) {
    setText1(e.target.value);
  }
  function handleChange2(e) {
    setText2(e.target.value);
  }
  function handleChange3(e) {
    setText3(e.target.value);
  }
  function handleChange4(e) {
    setText4(e.target.value);
  }
  function handleChange5(e) {
    setText5(e.target.value);
  }
  function handleChange6(e) {
    setText6(e.target.value);
  }
  function handleChange7(e) {
    setText7(e.target.value);
  }
  function handleChange8(e) {
    setText8(e.target.value);
  }
  function handleChange9(e) {
    setText9(e.target.value);
  }

   const savet = ()=>  {
  
    
    var data = {
      text1:text1,
      text1:text2,
      text1:text3,
      text1:text4,
      text1:text5,
      text1:text6,
      text1:text7,
      text1:text8,
      text1:text9
      
    };

    NewcaseregistrationDataService.create(data)//passing the data
      .then(response => { //then is inbuilt function of axios
        setSave({
          id: response.data.id,
         text1:response.data.id,
         text2:response.data.id,
         text3:response.data.id,
         text4:response.data.id,
         text5:response.data.id,
         text6:response.data.id,
         text7:response.data.id,
         text8:response.data.id,
         text9:response.data.id,
          
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }



  
  
  const[state,setState]=useState('Select');
  const[cityItems,setCities]=useState([])
  const changeSate=(e)=>{
setState(e.target.value);
changeCities(e.target.value);
  }
  const changeCities=(state)=>{
    const getCities=cities.filter((s)=>{ return s.state==state});
    setCities(getCities);
  }
  useEffect(()=>{
    setFullname(JSON.parse(window.localStorage.getItem('user')).data.fullname);
    setEmail(JSON.parse(window.localStorage.getItem('user')).data.email);
    setPlace(JSON.parse(window.localStorage.getItem('user')).data.place);
  })
    return(
        <div  style={{margin:"20px"}}>
            <h1>Hypertension Case Registration</h1><hr/>
            
            <h2>DEMOGRAPHIC DATA</h2>
            <hr/>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Page1</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Page2</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Page3</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-view-tab" data-toggle="pill" data-target="#pills-view" type="button" role="tab" aria-controls="pills-view" aria-selected="false">Page4</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <form>
  <button type="button" class="btn btn-success" onClick={savet}>Save</button><hr/>
  <div class="row"  >
    <div class="col-md-6" >
        <label>Patient Initials*</label>
      <input type="text" class="form-control" placeholder="Patient Initials"  style={{margin:"10px"}} onChange={handleChange1} value={text1} />
      <label>Age in years*</label>
      <input type="Number" class="form-control" placeholder="Age in years"   style={{margin:"10px"}} onChange={handleChange2} value={text2}/>
      <label>Education*</label>  
          <select class="form-control form-control-lg"  style={{margin:"10px",height:"10%"}}onChange={handleChange3} value={text3}>
          {/* <option> select</option>
      <option>B.Tech</option>
      <option>B Arch</option>
      <option>BBA</option> */}
      {education.map((edu)=>(
        <option>{edu}</option>
      ))}
      </select>
      <label onChange={handleChange4} value={text4}>State*</label >  
          <select value={state} onChange={changeSate} class="form-control form-control-lg"  style={{margin:"10px",height:"10%"}}>
      {/* <option> select</option>
      <option>Karnataka</option>
      <option>Tamil Nadu</option>
      <option>Andhra Pradesh</option> */}
      {states.map((state)=>(
        <option>{state}</option>
      ))}
      </select>
      <label onChange={handleChange5} value={text5}>Place *</label><br/>
  <div class="form-check form-check-inline"  style={{margin:"10px"}}>
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Urban</label>
  </div>
 <div class="form-check form-check-inline"  style={{margin:"10px"}}>
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Rural</label>
 </div>

    </div>
    <div class="col-md-6">
        <label onChange={handleChange6} value={text6}>Subject_number*</label>
      <input type="text" class="form-control" placeholder="Last name"  style={{margin:"10px"}}/>
      <label>gender *</label>  
          <select class="form-control form-control-lg"style={{margin:"10px",height:"10%"}}>
      {/* <option>select</option>
      <option>Male</option>
      <option>Female</option>
      <option>others</option> */}
      {gender.map((gender)=>(
        <option>{gender}</option>
      ))}
      </select>
      <label onChange={handleChange7} value={text7}>Occupation*</label>  
          <select class="form-control form-control-lg"style={{margin:"10px",height:"10%"}}>
      {/* <option>select</option>
      <option>Accountant</option>
      <option>Actor</option>
      <option>Architect</option> */}
      {occupation.map((occupation)=>(
        <option>{occupation}</option>
      ))}
      </select>
      <label onChange={handleChange8} value={text8}>City*</label>  
          <select class="form-control form-control-lg" style={{margin:"10px",height:"10%"}}>
      {/* <option>select</option>
      <option>Bangalore</option>
      <option>Mandya</option>
      <option>Mysore</option> */}
      {cityItems.map((c)=>(

        <option>{c.city}</option>
      ))}
      </select>
      <label onChange={handleChange9} value={text9}>Socio Economic Status*</label>  
          <select class="form-control form-control-lg" style={{margin:"10px",height:"10%"}}>
      {/* <option>select</option>
      <option>Upper Class</option>
      <option>Middle Class</option>
      <option>Low Class</option> */}
      {socio_economic.map((Socio)=>(
        <option>{Socio}</option>
      ))}
      </select>
      
    </div>
    
  </div>
  <h2>TREATING PHYSICIAN'S INFORMATION</h2>
  <hr/>
  <div class="row" >
    <div class="col-md-6">
    <label>Full Name*</label>
      <input type="text" value={JSON.parse(window.localStorage.getItem('user')).data.fullname} class="form-control" placeholder="Full Name"  style={{margin:"10px"}}/>
      <label>Place of practice*</label>
      <input type="text" value={JSON.parse(window.localStorage.getItem('user')).data.place} class="form-control" placeholder="Place of practice"/>
      <label>Phone Number*</label>
      <input type="text"value={JSON.parse(window.localStorage.getItem('user')).data.phone} class="form-control" placeholder="Phone Number"  style={{margin:"10px"}}/>
      <label>State*</label> 
      <input type="text"value={JSON.parse(window.localStorage.getItem('user')).data.state} class="form-control" placeholder="State"  style={{margin:"10px"}}/> 
          {/* <select  value={JSON.parse(window.localStorage.getItem('user')).data.state} class="form-control form-control-lg"style={{margin:"10px"}}>
      <option> select</option>
      <option>Karnataka</option>
      <option>Tamil Nadu</option>
      <option>Andhra Pradesh</option>
      </select> */}


    </div>
    <div class="col-md-6">
    <label>Doctor's hospital name*</label>
      <input type="text" value={JSON.parse(window.localStorage.getItem('user')).data.hospital_name} class="form-control" placeholder="Doctor's hospital name"  style={{margin:"10px"}}/>
      <label>Email*</label>
      <input type="text" value={JSON.parse(window.localStorage.getItem('user')).data.email} class="form-control" placeholder="Email"  style={{margin:"10px"}}/>
      <label>City*</label>  
      <input type="text" value={JSON.parse(window.localStorage.getItem('user')).data.city} class="form-control" placeholder="City"  style={{margin:"10px"}}/>
          {/* <select value={JSON.parse(window.localStorage.getItem('user')).data.city} class="form-control form-control-lg"style={{margin:"10px"}}>
      <option>select</option>
      <option>Bangalore</option>
      <option>Mandya</option>
      <option>Mysore</option>
      </select>
       */}
    </div>
   

  </div>
  <h2> CHIEF COMPLAINT</h2><hr/>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <h2>COMORBIDITIES</h2><hr/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div>
  <p>If yes please specify</p>
  <div class="row">
    <div class="col-md-4">
    <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Dyslipidemia</label>
  </div><br/>
  <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Cardiovascular disorders</label>
  </div><br/>
  <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Diabetes</label>
  </div><br/>
  <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Other(Specify)</label>
  </div><br/>

    </div>
    <div class="col-md-4">
    <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Chronic liver disease</label>
  </div><br/>
  <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Hypothyroidism</label>
  </div><br/>
  <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Chronic kidney disease</label>
  </div><br/>
    </div>
    <div class="col-md-4">
    <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Neurological Disorder</label>
  </div><br/>
  <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2"> Behavior disorders</label>
  </div><br/>
  <div class="form-check form-check-inline"style={{margin:"10px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Asthma</label>
  </div><br/>
    </div>
  </div>
  <label>Past History</label>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <h2>PERSONAL HISTORY</h2><hr/>
  <label>Diet</label><br/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1" >Yes</label>
</div>
<div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div>
  <br/>
  <label>Smoking</label><br/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div>
  <br/>
  <label>Smoking</label><br/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div><br/>
  <label>Others</label>
      <input type="text" class="form-control" placeholder="Others"/>
      <label>Sleep Apnea</label><br/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div><br/>
  <label>Erectile Dysfunction</label><br/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div><br/>
  <label>Exercise</label>  
          <select class="form-control form-control-lg">
      <option> select</option>
      <option>Walking</option>
      <option>Jogging</option>
      <option>Yoga</option>
      </select><br/>
      <label>Use of Computer</label><br/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline"style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div><br/>
  <label>Use of Smart Phones</label><br/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div><br/>
  <label>Family History</label>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  
  
   

</form>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <button type="button" class="btn btn-success">Save</button><hr/>
    <h2>CURRENT MEDICATIONS</h2><hr/>
    <AddDeleteTableRows/>
    <TableRows/>
    <label>Allergies / Sensitivities</label>
      <input type="text" class="form-control" placeholder="Enter Allergies / Sensitivities"/>
      <label>Contraindicated Medication</label>
      <input type="text" class="form-control" placeholder=" Enter Contraindicated Medication"/>
      <h2>PHYSICAL EXAMINATION</h2><hr/>
      <div className="row">
        <div className="col-md-2">
       
        <label>Height</label>  
          <select class="form-control form-control-lg">
      <option> select</option>
      <option>feet</option>
      <option>inches</option>
     
      </select>
        </div>
        <div className="col-md-2">
          <br/>
        <input type="text" class="form-control" placeholder="Height"/>
        </div>
        <div className="col-md-2">
        <label>Weight</label>
        <input type="text" class="form-control" placeholder="Weight"/>
        </div>
        <div className="col-md-2">
        <button type="button" class="btn btn-success">+Calculate BMI</button>
        </div>
        <div className="col-md-2">
        <input type="text" class="form-control" placeholder="BMI"/>
        </div>
        <div className="col-md-2">
        <select class="form-control form-control-lg">
      <option> select</option>
      <option>Under Weight</option>
      <option>Normal weight</option>
      <option>lean</option>
     
      </select>
        </div>
      </div>
      <label>Obesity</label><br/>
  <div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
</div>
<div class="form-check form-check-inline" style={{margin:"20px"}}>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No</label>
  </div><br/>
  <label>Pulse Rate/minute</label>
      <input type="text" class="form-control" placeholder=" Pulse Rate/minute"/>
      <label>Respiratory Rate/minute</label>
      <input type="text" class="form-control" placeholder=" Enter Respiratory Rate/minute "/>
      <h2>SEATED BLOOD PRESSURE READING</h2><hr/>
      {/* <AddTable/>
      <RowTable/> */}
      <AddDeleteTableRows1></AddDeleteTableRows1>
     <TableRows1></TableRows1>
     <label>Systemic Examination</label>
      <input type="text" class="form-control" placeholder=" Enter Systemic Examination "/>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <button type="button" class="btn btn-success">Save</button><hr/>
    <App/>
  </div>
  <div class="tab-pane fade" id="pills-view" role="tabpanel" aria-labelledby="pills-view-tab">
  <button type="button" class="btn btn-success" style={{margin:"5px"}}>Save</button>
  <button type="button" class="btn btn-success">Submit</button>
  <div className="row">
    <div className="col-md-3">

    </div>
    <div className="col-md-3">
      
    </div>
    <div className="col-md-3">
      
    </div>
    <div className="col-md-3">
      
    </div>
  </div>
    <AddDeleteTableRows></AddDeleteTableRows>
    <TableRows></TableRows>
    <AddDeleteTableRows></AddDeleteTableRows>
    <TableRows></TableRows>
    <AddDeleteTableRows></AddDeleteTableRows>
    <TableRows></TableRows>
    <AddDeleteTableRows></AddDeleteTableRows>
    <TableRows></TableRows>
  </div>
</div>

        </div>
    );
    }