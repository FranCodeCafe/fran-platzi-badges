import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName="Fran"
    lastName="Salinas"
    avatarUrl="https://imgur.com/fMsLStH.jpg"
    jobTitle="Frontend Dev"
    twitter="franlitchi"
    
/>, container);
