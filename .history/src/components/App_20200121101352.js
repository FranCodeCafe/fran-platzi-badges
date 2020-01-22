import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App() {
  return (
    <Switch>
      <div>
        <Route path="/badges" component={Badges}/>
        <Route path="/badges/new" component={BadgeNew}/>
      </div>  
    </Switch>
  );
}

export default App;