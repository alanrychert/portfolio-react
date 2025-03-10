import React, { Component } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faGamepad, faMusic, faUmbrellaBeach, faVolleyball } from '@fortawesome/free-solid-svg-icons';

const aboutTextP1 = `
Hi! I’m Alan, a Software Engineer who relocated from Bahía Blanca, Argentina, to Amsterdam, Netherlands, in April 2024 to improve my English and experience a new culture. After achieving that goal, I moved to Barcelona, Spain, to focus on advancing my career.
`;
const aboutTextP2 = `
I’m an active person who enjoys social gatherings like barbecues and volleyball matches. I also appreciate quiet 
days at the beach or biking around a park, always with headphones and my favorite music. And, of course, I 
love video games, especially MMORPGs.
`;
const aboutTextP3 = `
One of the most rewarding aspects of my work is solving complex problems. Algorithmic challenges, in particular, 
present an intriguing puzzle, and I enjoy the process of working through them to find a solution. This passion for 
tackling complex issues was a key reason I pursued a degree in Software Engineering. Additionally, I 
thrive on collaborating with clients to analyze their needs and deliver impactful solutions. I value 
participating in meetings, working with different departments, and exploring various options to develop 
the most effective solutions, as well as taking hands-on action to implement them.
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
                        <span>About Me</span>
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
                                                    <p className="about-text-size">{aboutTextP1}</p>
                                                    <p className="about-text-size">{aboutTextP2}</p>
                                                    <p className="about-text-size">{aboutTextP3}</p>
                                                </div>
                                                <hr></hr>
                                                <div className="col-auto d-flex justify-content-evenly">
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