import React from 'react';



function BadgeDetails(props){
    <div>
        <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={confLogo} alt="Logo de la conferencia"/>
                    </div>
                    <div className="col-6 BadgeDetails__hero-attendant-name">
                        <h1>
                            {badge.firstName} {badge.lastName}
                        </h1>
                    </div>
                </div>

            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                        firstName={badge.firstName}
                        lastName={badge.lastName}
                        email={badge.email}
                        twitter={badge.twitter}
                        jonTitle={badge.jobTitle}
                    />
                </div>
                <div className="col-6">
                    <h2>
                        Actions
                    </h2>
                    <div>
                        <div>
                            <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                        </div>
                        <div>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default BadgeDetails;