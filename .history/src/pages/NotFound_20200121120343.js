import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';
import stars from '../images/stars.svg';
import lost from '../images/404-astronaut.png';

function NotFound(){
    return (
        <React.Fragment>
            <div className="NotFound">
                <div className="NotFound__col">
                    <img src={lost} alt="404"/>
                    <h1>404: Not Found</h1>
                    <Link to="/" className="btn btn-primary">Volver al Home</Link>
                </div>
            </div>
        </React.Fragment>
    );

}

export default NotFound;