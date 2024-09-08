import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const fadeInVariants: Variants = {
    offscreen: {
      y:150,
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      y:0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }
    }
  };

const Project = ({ title, text, imgSrc, link }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="card" variants={fadeInVariants} style={{ width: "20rem" }}>
        <img className="card-img-top" src={imgSrc} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text project-text-size" style={{textAlign: "justify"}}>{text}</p>
          <a href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom">
            Repository <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
