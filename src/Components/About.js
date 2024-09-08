import React, { Component } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faGamepad, faMusic, faUmbrellaBeach, faVolleyball } from '@fortawesome/free-solid-svg-icons';

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
                                        viewport={{ once: false, amount: 0.8 }}
                                    >
                                        <motion.div className="card" variants={fadeInRightVariants}>
                                            <div
                                            className="card-body text-justify ml-3 mr-3"
                                            style={{
                                                height: "auto",
                                                fontSize: "132%",
                                                lineHeight: "200%",
                                            }}
                                            >
                                                <div className="flex-column d-flex align-items-center justify-content-center">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at enim est. 
                                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                                                    turpis egestas. Vivamus lacinia placerat imperdiet. Quisque non massa a enim 
                                                    pellentesque cursus. Morbi enim enim, hendrerit eget lacus a, placerat semper 
                                                    nibh. Curabitur eget egestas nisl, a aliquam libero. Donec scelerisque ornare 
                                                    massa, at ultricies risus sagittis sed. Nunc id nibh dolor. Lorem ipsum dolor 
                                                    sit amet, consectetur adipiscing elit. Etiam varius tempus est, in semper 
                                                    neque scelerisque nec.
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