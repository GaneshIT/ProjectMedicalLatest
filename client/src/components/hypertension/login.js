import hyperlogo from '../../assets/images/hyper-logo.png';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../AuthContext";
import HeaderComponent from './header';
import FooterComponent from './footer';
import { useState } from 'react';
export default function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const readEmail=(e)=>{
        setEmail(e.target.value);
    }
    const readPassword=(e)=>{
        setPassword(e.target.value);
    }
    const { login } = useAuth();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        login({
          email: email,
          password: password
        });
      };

    return(
        
        <div  className="container" style={{textAlign:'center'}}>
            
            <div className='row'>
                <div className='col-md-12'>
                    <img src={hyperlogo}/>
                    
                </div>
            </div>
            <h2>HYPERTENSION REGISTRY OF INDIA</h2>
            <h2>Welcome back!</h2>
            <h3>Don't have an account?<span><Link to={"/register"}>Sign Up</Link></span></h3>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input id="email" type="text" value={email} onChange={readEmail} className="form-control" placeholder="Enter your email id" />
        </div>
        <div className="form-group">
            <input id="password" type="text" value={password} onChange={readPassword} className="form-control" placeholder="Enter your password" />
        </div>
        <input type="submit" value="Login" className="btn btn-success" />
        <div>Forgot your password? <span><Link to={"/register"}>Reset it</Link></span></div>
        </form>
        <FooterComponent/>
        </div>
    );
}