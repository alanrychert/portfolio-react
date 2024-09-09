import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineData from "../TimelineData.json";
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

class Timeline extends Component {
  render() {
    return (
      <section>
        <div className=" pb-3" style={{backgroundColor: "#ADD8E6"}}>
            <h1 className= "pt-5 pl-2" style={{ color: "black", paddingBottom: "2%"}}>
                <span>Work History</span>
            </h1>
            <VerticalTimeline>
                {TimelineData.map((element,index) => (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  black' }}
                    key={index}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={{ background: '#ADD8E6', color: 'black' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} className="fs-3"/>}
                    >
                        <h3>
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location} - {element.company}
                        </h5>
                        <p className="timeline-text-size" style={{textAlign: "justify"}} id="description">{element.description}</p>
                        <div className="tech-pill-container justify-content-center">
                            {element.technologies && element.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            
        </div>
      </section>
    );
  }
}

export default Timeline;