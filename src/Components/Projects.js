import React, { Component } from "react";
import Project from "./Project";
import projectsData from "../ProjectsData.json";

class Projects extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid pb-3">
          <div className="col-md-12 about-section pt-5 pl-2 pr-2">
            <h1 style={{ color: "black", paddingBottom: "2%" }}>
              <span>Projects</span>
            </h1>
          </div>
          <div className="row d-flex justify-content-evenly">
            {projectsData.map((project, index) => (
              <div className="col-auto p-4" key={index}>
                <Project
                  title={project.title}
                  text={project.text}
                  imgSrc={project.imgSrc}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;