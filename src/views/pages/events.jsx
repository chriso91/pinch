import React, { Component } from "react";
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import * as events0 from '../../assets/events/events.jsx';

class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: events0.events
    }
  }

  render() {
    return (
      <div id="events">
        <Header />
        <div id="eventList"></div>
        {this.state.events.map((d, i) =>
          <div className="eventlist" key={i}>
            <h2>{d.name}</h2>
            <img src={d.picture}/>
            <p>{d.description}</p>
            <hr className="shadowBar"/>
          </div>
        )}
      </div>
    );
  }
}

export default Events;
