import React, { Component } from "react";
import { motion } from "framer-motion";

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
        <section id="about ">
          <div className="col-md-12 about-section">
            <h1 style={{ color: "black", paddingTop: "5%", paddingBottom: "2%" }}>
              <span>About me</span>
            </h1>
            <div className="row center mx-auto mb-5 justify-content-center align-items-center">
              <div className=" pl-3 col-md-3 mb-5 center">
                <div className="polaroid">
                  <span style={{ cursor: "auto" }}>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        <motion.div className="card" variants={fadeInRightVariants}>
                            <img src="Images/profile.jpg" class="img-thumbnail" alt="..."/>
                        </motion.div>
                    </motion.div>
                  </span>
                </div>
              </div>
  
              <div className="col-md-8 center">
                <div className="col-md-12">
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
                                <br />
                                <span className="wave">Lorem Ipsum :) </span>
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at enim est. 
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                                turpis egestas. Vivamus lacinia placerat imperdiet. Quisque non massa a enim 
                                pellentesque cursus. Morbi enim enim, hendrerit eget lacus a, placerat semper 
                                nibh. Curabitur eget egestas nisl, a aliquam libero. Donec scelerisque ornare 
                                massa, at ultricies risus sagittis sed. Nunc id nibh dolor. Lorem ipsum dolor 
                                sit amet, consectetur adipiscing elit. Etiam varius tempus est, in semper 
                                neque scelerisque nec.
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
  
  export default About;