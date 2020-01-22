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
                <div className="Home__col">
                    <img src={platziconflogo} alt="platziconflogo"/>
                    <h1>PRINT YOUR BADGES</h1>
                    <p>The easiest way to manage your conference</p>
                    <Link to="/badges" className="btn btn-primary">Start now</Link>
                </div>
                {/* <div className="Home__col">
                    <img src={astronauts} alt="Astronauts"/>
                </div> */}
            </div>
        </React.Fragment>
    );
}

export default Home;