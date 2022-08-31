import { Box } from "@material-ui/core";
import React from "react";
import './Pictures.css';
// import ReactFullpage from '@fullpage/react-fullpage';
//import  Fullpage,{FullPageSections,FullpageNavigation, FullpageSection}  from "@ap.cx/react-fullpage";
import arctic from '../assets/arctic.jpg';
import pacific from '../assets/Pacific.jpg';
import indian from '../assets/indian.jpg';


function Pictures(){
 return(
  <div id="Shaq">
   <Box className="GOT">
   <img src={arctic} alt="" id="img1"></img>
   <p className="written">The Arctic Ocean is divided by an underwater ocean ridge called the Lomonosov 
    ridge into the 4,000-4,500 m deep Eurasian or Nasin basin and the 4,000 m deep North American or 
    Hyperborean basin. The topography of the Arctic Ocean bottom varies consisting of fault-block ridges, abyssal plains, 
    and ocean deeps and basins that have an average depth of 1,038 m due to the continental shelf on the Eurasian side.</p>
   </Box>
   <Box className="GOT">
   <img src={pacific} alt="" id="img2"></img>
   <p className="written">The Indian Ocean is the third-largest in the world and makes up approximately 20% of the Earth’s water surface. It is bounded by 
    southern Asia in the north, the Arabian Peninsula and Africa in the west, the Malay Peninsula, Sundra Islands 
    and Australia in the east and the Southern Ocean in the south. The Indian Ocean stretches to about 30° N latitude 
    in the Persian Gulf at its northernmost extent. At the southern tips of Africa and Australia, it is 
    almost 10,000 km (or 6,200 miles) wide and its area is 73,556,000 km² (or 28,400,000 sq miles) when the 
    Red Sea and the Persian Gulf are included. </p>
   </Box>
   <Box className="GOT">
   <img src={indian} alt="" id="img3"></img>
   <p className="written">
   The Pacific is the world’s largest body of water and was named by the Portuguese explorer Ferdinand Magellan who found the Pacific 
   very peaceful (“pacifique”, means peaceful in French) for most of his journey from the Straits of Magellan 
   to the Philippines. In contrast to its name, the islands of the “peaceful ocean” are often slammed by 
   typhoons and hurricanes. The countries that border the Pacific, or the Pacific Rim, often experience 
   volcanoes and earthquakes. Entire towns have been wiped out by Tsunamis, the large waves caused by an underwater earthquake.
   </p>
   </Box>
   {/* <Fullpage>
    <FullPageSections>
     <FullpageSection className="GOT">
      <h1>Screen 1</h1>
     </FullpageSection>
     <FullpageSection className="GOT">
      <h1>Screen 2</h1>
     </FullpageSection>
     <FullpageSection className="GOT">
      <h1>Screen 3</h1>
     </FullpageSection>
    </FullPageSections>
   </Fullpage> */}
  </div>
 )
}

export default Pictures;