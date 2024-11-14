import React from 'react';
import './About.css';
import logo from '../images/download.jpg';
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-section">
        <img Src={logo} alt="About" />
      </div>
      <div className="text-section">
        <h2><b>About Us</b></h2>
        <p>
         SARALPIXEL-AI LABS PRIVATE LIMITED having CIN U72100DL2024PTC427676 is 8 
         months & 13 days old Private company incorporated with MCA on 1st March, 2024.. It is primarily 
         involved in research and development, particularly in the fields of machine learning and deep learning. The company focuses on 
         creating innovative
         automated solutions, especially targeting advancements in healthcare technology
.
        </p>
        <p>
        The organization is a privately held entity with a registered office located at Mandawali, East Delhi. It has two directors, Uzma Ansari and Nripendra Kumar Singh, 
        who have been instrumental in leading the company's efforts towards technological innovations.
        ​</p>
        <p>
        SaralPixel AI Labs aims to leverage AI-driven solutions to revolutionize sectors like healthcare by employing cutting-edge research techniques and developing practical applications to streamline complex processes. The company currently operates with a small team size
         (estimated between 10-50 employees), indicating a startup culture with a focus on innovation.
        </p>
        
        {/* <Button></Button>
       a href = /details
       Learn more
       a   */}
       <button>
       <a href="about2.jsx"> <font size="5">Learn More  </font></a>
       </button>
       {/* <button>
          <Link to="/details"> <font size="5">Learn More  </font> </Link>
        </button>
        */}
        
        
        

      </div>
    </div>
    
  );
};

export default About;






