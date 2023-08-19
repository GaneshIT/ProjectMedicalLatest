import React, { useState } from "react";
import HeaderComponent from "./header";
import FooterComponent from "./footer";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    
    <div className="container" >
      <HeaderComponent/>
      <h1 style={{textAlign:"center"}}>Contact Us</h1>
        <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="mb-3 pt-0">
      <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                name="name"
              />
            </div>
      </div>
      <div className="mb-3 pt-0">
      <div className="form-group">
              <label htmlFor="title">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                name="email"
              />
            </div>
        
        
      </div>
      <div className="mb-3 pt-0">
      <div className="form-group">
              <label htmlFor="title">Contact Number</label>
              <input
                type="number"
                className="form-control"
                id="number"
                required
                name="number"
              />
            </div>
        
      </div>
      <div className="mb-3 pt-0">
      <div className="form-group">
              <label htmlFor="title">Subject</label>
              <input
                type="text"
                className="form-control"
                id="text"
                required
                name="text"
              />
            </div>
       
      </div>
      <div className="mb-3 pt-0">
      <div className="form-group">
              <label htmlFor="title">Message</label>
              <textarea  className="form-control">
              
               
              
              </textarea>
                
            </div>
       
      </div>
      <button className="btn btn-success">submit</button>
    </form>
    <FooterComponent/>
    </div>
  );
};

export default ContactForm;