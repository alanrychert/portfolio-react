import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faGitAlt, faPhp, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a recent Information Systems Engineering graduate with a strong interest in 
                    project management, quality assurance, backend developing, and the pursuit of technological 
                    solutions. I am eager to work in an environment that leverages the latest technologies 
                    and involves challenging and diverse projects.
                </p>
                <p>
                    I am passionate about building a career focused on finding innovative solutions, 
                    always ready to develop new skills and enhance existing ones. 
                    I consider myself responsible, punctual, perseverant, and sociable.
                </p>
                <p>
                    If I had to describe myself in one sentence, I would say I am a friendly person 
                    who loves hanging out with friends, 
                    engaging in outdoor activities, and has a strong interest in mobile technologies.
                </p>
            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPhp} color="#AEB2D5" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#f89820" />
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faServer} color="#00008B" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
    
    )
}

export default About