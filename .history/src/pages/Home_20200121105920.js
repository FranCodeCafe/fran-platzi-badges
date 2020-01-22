import React from 'react';
import { Link } from 'react-router-dom';





function Home(){
    return(
        <React.Fragment>
            <div>
                <h1>HOME!</h1>
                <Link to="/badges" className="btn btn-primary">Start now</Link>
            </div>
        </React.Fragment>
    );
}

export default Home;