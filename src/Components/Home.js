import React, { Component } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

const fadeInVariants: Variants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }
    }
  };

class Home extends Component {
    render() {
  
      return (
        <section id="Home">
            <div className="vh-100 row center mb-5 justify-content-center align-items-center pr-2 pl-2" style={{ overflowX: 'hidden' }}>
              <div className="col-md-6 center">
                <div className="col-md-12">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.div variants={fadeInVariants}>
                            <div
                            className="text-justify ml-3 mr-3"
                            style={{
                                height: "auto",
                                lineHeight: "200%",
                            }}
                            >
                                <div className="d-flex-flex column">
                                    <div className=" flex-row d-flex align-items-center justify-content-center">
                                        <div>
                                            <h1 style={{fontWeight: "bold"}}>Alan Rychert</h1>
                                            <h4 style={{color: "grey"}}> Software Engineer </h4>
                                            <span>
                                                <h6 style={{color: "light-grey"}}> <FontAwesomeIcon icon={faMapLocation}/> Amsterdam, NL</h6>
                                            </span>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className=" flex-row d-flex align-items-center justify-content-center " style={{color: "black"}}>
                                        <div className="d-inline-block p-2 border rounded m-2" style={{backgroundColor: "#ADD8E6"}}> 
                                            <a href="https://www.linkedin.com/in/alan-rychert/"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faLinkedinIn} className="fs-3"/> 
                                            </a>
                                        </div>
                                        <div className="d-inline-block p-2 border rounded m-2" style={{backgroundColor: "#ADD8E6"}}> 
                                            <a href="https://www.github.com/alanrychert"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} className="fs-3"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
              </div>
            <div className=" pl-3 col-md-3 mb-5 pt-2">
                <div className="polaroid">
                  <span style={{ cursor: "auto" }}>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        <motion.div className="card" variants={fadeInVariants}>
                            <img src="Images/profile.jpg" class="img-thumbnail" alt="..."/>
                        </motion.div>
                    </motion.div>
                  </span>
                </div>
              </div>
            </div>
        </section>
      )
    }
}

export default Home;
