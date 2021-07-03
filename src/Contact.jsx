import React, { useState } from "react";

const Contact = () => {
  
  const [data, setData] = useState({
    fullname: "",
    address: "",
    email: "",
    phoneno: "",
    message: "",
  });
  
  const inputEvent = (e) => {
    const {name, value} = e.target;
    setData((obj) => {
      return {
        ...obj,
        [name]: value
      }
    });
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    alert (
    `Name - ${data.fullname} 
     Email - ${data.email}
     Address - ${data.address}
     PhoneNo - ${data.phoneno}
     Message - ${data.message}`
    );
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center text-danger my-2 alert-danger" style={{fontFamily: "cursive"}}>Contact Page</h1>
        <form onSubmit={submitForm}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Full Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name..." name="fullname" onChange={inputEvent} value={data.fullname} required />
            <label for="exampleFormControlInput2">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Enter Your Email..." name="email" onChange={inputEvent} value={data.email} required />
            <label for="exampleFormControlInput3">Address</label>
            <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Your Address..." name="address" onChange={inputEvent} value={data.address} required />
            <label for="exampleFormControlInput4">Phone No</label>
            <input type="number" class="form-control" id="exampleFormControlInput4" placeholder=" Enter Your PhoneNo..." name="phoneno" onChange={inputEvent} value={data.phoneno} required />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type Your Message..." name="message" onChange={inputEvent} value={data.message} required />
          </div>
          <button type="submit" className="btn btn-outline-primary my-2">Submit</button>
        </form>
      </div>
    </>
    )
};

export default Contact;