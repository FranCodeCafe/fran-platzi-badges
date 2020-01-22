import React from 'react';
import { Link } from 'react-router-dom';
import stars from '../images/stars.svg';
import astronauts from '../images/astronauts.svg';
import platziconflogo from '../images/platziconf-logo.svg';





function Home(){
    return(
        <React.Fragment>
            <div>
                
                <Link to="/badges" className="btn btn-primary">Start now</Link>
            </div>
        </React.Fragment>
    );
}

export default Home;