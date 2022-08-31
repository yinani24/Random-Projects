import React from "react";
import "./Home.css"
import Box from '@material-ui/core/Box';

function Home(){
 return(
  <div className="Show">
   <Box className="Boxe" p={1}>
    <h2 id="wtv">Welcome to Home Page of Ocean Pictures</h2> 
    <p id="Cool">It is a website to show different ocean images and describe some of their features.</p>
   </Box>
  </div>
 )
}

export default Home;