import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import stars from '../images/stars.svg';
import astronauts from '../images/astronauts.svg';
import platziconflogo from '../images/platziconf-logo.svg';





function Home(){
    return(
        <React.Fragment>
            <div className="Home">
                <img src={platziconflogo} alt="platziconflogo"/>
                <img src={astronauts} alt="Astronauts"/>
                <h2>PRINT YOUR BADGES</h2>
                <p>The easiest way to manage your conference</p>
                <Link to="/badges" className="btn btn-primary">Start now</Link>
            </div>
        </React.Fragment>
    );
}

export default Home;