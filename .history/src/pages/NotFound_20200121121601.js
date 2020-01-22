import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';
import stars from '../images/stars.svg';
import lost from '../images/404-astronaut.png';

function NotFound(){
    return (
        <React.Fragment>
            <div className="NotFound">
                <div className="NotFound__col col-6">
                    <img className="Lost__astronaut" src={lost} alt="404"/> 
                </div>
                <div className="NotFound__col col-6">
                    <h1>404: Not Found</h1>
                    <p>It seems you are <br/> a lost cowboy</p>
                    <Link to="/" className="btn btn-primary">Go back Home?</Link>
                </div>
            </div>
        </React.Fragment>
    );

}

export default NotFound;