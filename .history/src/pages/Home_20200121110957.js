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
                <img src={astronauts} alt="Astronauts"/>
                <Link to="/badges" className="btn btn-primary">Start now</Link>
            </div>
        </React.Fragment>
    );
}

export default Home;