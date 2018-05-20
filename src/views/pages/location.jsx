import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from '../components/header';
import outside from '../../assets/images/outside.png';
import greenguy from '../../assets/images/greenguy.png';

class Location extends Component {
  render(){
    return(
      <div id='location'>
        <Header />
        <h1 className="title">Location</h1>
        <Grid>
          <Row>
            <Col md={6} lg={6}>
              <img src={outside} className="outsideLocation"/>
              <img src={greenguy} className="green"/>
            </Col>
            <Col md={6} lg={6}>
              <p className="locationDesc"> asglsang sahgsakjd gsjdg pasidjg
              asdgh asodgih sodgih asodguh osdhg ohs adgoih
            asgasdfg iasjd gh asodgi saodgi osaidhg osadh </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Location;
