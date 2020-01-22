import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/badges/new" component={BadgeNew}/>
        <Route path="/badges" component={Badges}/>
      </Switch>  
    </BrowserRouter>
  );
}

export default App;