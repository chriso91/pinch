import React, { Component } from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import Header from '../components/header.jsx';
import eventImg from '../../assets/images/event.png';
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
        <h1 className="title">Upcoming Events</h1>
        <div className="strip"></div>
        <div className="eventImg"><img className="eventBack" src={eventImg}/></div>
        {this.state.events.map((d, i) =>
          <div className="eventlist" key={i}>
            <Grid>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <h2>{d.name}</h2>
                  <img src={d.picture}/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p>{d.description}</p>
                </Col>
              </Row>
            </Grid>
            <hr className="shadowBar"/>
          </div>
        )}
      </div>
    );
  }
}

export default Events;
