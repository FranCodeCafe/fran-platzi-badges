import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import App from './pages/App';

const container = document.getElementById('app');

ReactDOM.render(<Badges 
    /* firstName="Fran"
    lastName="Salinas"
    avatarUrl="https://imgur.com/fMsLStH.jpg"
    jobTitle="Frontend Dev"
    twitter="franlitchi" */
    
/>, container);
