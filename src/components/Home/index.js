import './index.scss';
import LogoTitle from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo  from '../../assets/images/Logo.png'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['y','c','h','e','r','t']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r','.']

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br/>
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _12`}>'m</span>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Software developer / Business Analyst</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <img src={Logo} alt="Logo" className='logo-container'/>
        </div>
    )
}
export default Home;