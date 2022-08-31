import { Box } from "@material-ui/core";
import React from "react";
import './About.css';
import pic from '../assets/self.jpg';

function About(){
 return(
  <div className="Exam">
   <Box id="Boxelem">
    <img src={pic} alt="My PIC" id="SEE"/>
    <Box id="InnerBox">
     <p id="OK">Hi, I am Yash Inani developer of this website. This website is based on ocean pictures
      because I used picture of the Ocean as the background and wanted to continue building a website on that.
      This website is a tester on my react skills. I used various new functionalities which I didnt explore last time
      like Box from material-ui and also used APIs like EmailJS for the Contact Page. Some server work
      for connecting email with my own personal email. It is a small project just to try and test my
      knowledge. I hope you like it.
     </p>
    </Box>
   </Box>
  </div>
 )
}

export default About;