import React from 'react';
import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

class BadgeDetails extends React.Component {
    render(){
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>
                                    Fran Salinas
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}



export default BadgeDetails;