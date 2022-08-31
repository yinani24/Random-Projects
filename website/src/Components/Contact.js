import { Box } from "@material-ui/core";
import React,{useRef, useState} from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser';


function Send(){
 return(
  <p id="Other">Message Sent</p>
 )
}

function Contact(){
 const form = useRef();
 const[count,setState] = useState(0);
 const sendEmail = (e) => {
   e.preventDefault();
   
   // emailjs.sendForm('service_6yq1hcc', 'template_s3fgmse', form.current, 'ZtgLzX2XquwlriIhr')
   //   .then((result) => {
   //       console.log(result.text);
   //       setState(1);
   //   }, (error) => {
   //       console.log(error.text);
   //   });
   (async function(){
     try{ 
      setState(1);
      const result = await emailjs.sendForm('service_6yq1hcc', 'template_s3fgmse', form.current, 'ZtgLzX2XquwlriIhr');
      console.log(result.text);
      console.log("Hello");
      e.target.reset();
     }
     catch{
      throw new Error('Data coud not be sent')
     }
   })();
 };
 
 setTimeout(()=>{
  setState(0)},5000)

 return(
  <Box className="New">
   <form id="New" ref={form} onSubmit={sendEmail}>
    <p className="Other">Contact Form</p>
    <label>Name</label>
    <input type="text" name="user_name" required/>
    <label>Email</label>
    <input type="email" name="user_email" required/>
    <label>Message</label>
    <textarea name="message" required/>
    <input type="submit" value="Send"/>
    <div>{count === 1 ? <Send/> : null}</div>
   </form>
  </Box>
 )
}

export default Contact;