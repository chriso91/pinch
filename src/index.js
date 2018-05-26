import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import {StaticRouter} from 'react-router';
import Home from './views/pages/home';
import Bios from './views/pages/bios';
import Events from './views/pages/events';
import Contact from './views/pages/contact';
import Location from './views/pages/location';
import OpenMic from './views/pages/openmic';
import Social from './views/pages/social';

require('./sass/site.scss');

ReactDOM.render((
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/bios" component={Bios}/>
          <Route path="/events" component={Events}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/location" component={Location}/>
          <Route path="/openmic" component={OpenMic}/>
          <Route path="/social" component={Social}/>
        </Switch>
     </BrowserRouter>
     ),
     document.getElementById('root')
);
