import React, { Component } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faGamepad, faMusic, faUmbrellaBeach, faVolleyball } from '@fortawesome/free-solid-svg-icons';

const aboutTextP1 = `
Hi! My name is Alan, and I am a recently graduated Software Engineer. I’m 24 years old, and in April 2024, I moved 
from Bahía Blanca, Argentina, to Amsterdam, Netherlands. My goal is to improve my English and experience life in 
a country with a completely different culture and traditions.
`;
const aboutTextP2 = `
I’m an active person who enjoys social gatherings like barbecues and volleyball matches. I also appreciate quiet 
days at the beach or biking around a park, always with headphones and my favorite music. And, of course, I 
love video games, especially MMORPGs.
`;
const aboutTextP3 = `
One of the most rewarding aspects for me is solving complex problems. Algorithmic challenges, in particular, 
present an intriguing puzzle, and I value the process of working through them to find a solution. This interest 
in tackling complex issues was a key reason I pursued a degree in Software Engineering. Additionally, I enjoy 
collaborating with clients to analyze their needs and working to deliver the best possible solutions. I appreciate 
participating in meetings, working with different departments, and discussing various options to develop the most 
effective solutions.
`;

const fadeInRightVariants: Variants = {
    offscreen: {
      x: 150,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }
    }
  };

class About extends Component {
    render() {
  
      return (
        <section>
            <div className=" container-fluid" style={{backgroundColor: "#ADD8E6"}}>
                <div className="row h-100">
                    <div className="col-md-12 about-section pt-5 pl-2 pr-2" >
                        <h1 style={{ color: "black", paddingBottom: "2%" }}>
                        <span>About me</span>
                        </h1>
                        <div className="pl-2 pr-2 row center mx-auto mb-5 justify-content-center align-items-center">
                            <div className="col-md-10 center">
                                <div className="row">
                                    <motion.div
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        <motion.div className="card" variants={fadeInRightVariants}>
                                            <div
                                            className="card-body ml-3 mr-3"
                                            style={{
                                                height: "auto",
                                                fontSize: "132%",
                                                lineHeight: "200%",
                                            }}
                                            >
                                                <div style={{textAlign: 'justify'}}>
                                                    {aboutTextP1}
                                                    <br></br>
                                                    <br></br>
                                                    {aboutTextP2}
                                                    <br></br>
                                                    <br></br>
                                                    {aboutTextP3}
                                                </div>
                                                <hr></hr>
                                                <div className="d-inline-block p-2 border rounded m-2" style={{backgroundColor: "#ADD8E6"}}> 
                                                    <FontAwesomeIcon icon={faVolleyball} className="fs-3"/> 
                                                </div>
                                                <div className="d-inline-block p-2 border rounded m-2" style={{backgroundColor: "#ADD8E6"}}> 
                                                    <FontAwesomeIcon icon={faBicycle} className="fs-3"/> 
                                                </div>
                                                <div className="d-inline-block p-2 border rounded m-2" style={{backgroundColor: "#ADD8E6"}}> 
                                                    <FontAwesomeIcon icon={faUmbrellaBeach} className="fs-3"/> 
                                                </div>
                                                <div className="d-inline-block p-2 border rounded m-2" style={{backgroundColor: "#ADD8E6"}}> 
                                                    <FontAwesomeIcon icon={faMusic} className="fs-3"/> 
                                                </div>
                                                <div className="d-inline-block p-2 border rounded m-2" style={{backgroundColor: "#ADD8E6"}}> 
                                                    <FontAwesomeIcon icon={faGamepad} className="fs-3"/> 
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }
  
  export default About;