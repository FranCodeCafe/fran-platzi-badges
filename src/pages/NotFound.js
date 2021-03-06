import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';
import lost from '../images/404-astronaut.png';

function NotFound(){
    return (
        <React.Fragment>
            <div className="NotFound">
                <div className="NotFound__col">
                    <img className="Lost__astronaut" src={lost} alt="404"/> 
                </div>
                <div className="NotFound__col">
                    <h1>404: Not Found</h1>
                    <p>It seems like you <br/>are a lost cowboy</p>
                    <Link to="/" className="btn btn-primary">Go back Home?</Link>
                </div>
            </div>
        </React.Fragment>
    );

}

export default NotFound;