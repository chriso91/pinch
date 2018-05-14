import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/pages/home';
import Bios from './views/pages/bios';
import Events from './views/pages/events';
import Contact from './views/pages/contact';

require('./sass/site.scss');

ReactDOM.render((
     <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/bios" component={Bios}/>
          <Route path="/events" component={Events}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
     </BrowserRouter>
     ),
     document.getElementById('root')
);
