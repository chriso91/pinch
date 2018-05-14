import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return(
    <div id="footer">
      <Grid>
        <Row>
          <Col sm={4} md={4} lg={4} className="col">
            <div className="iconDiv">
              <a href="#"
                target="_blank" rel="noopener noreferrer">
                <FontAwesome name="instagram"/>
              </a>
            </div>
          </Col>
          <Col sm={4} md={4} lg={4} className="col">
            <div className="iconDiv">
              <a href="https://www.facebook.com/dccomedyevents/"
                target="_blank" rel="noopener noreferrer">
                <FontAwesome name="facebook"/>
              </a>
            </div>
          </Col>
          <Col sm={4} md={4} lg={4} className="col">
            <div className="iconDiv">
              <a href="https://www.google.com/maps/place/3548+14th+St+NW,+Washington,+DC+20010"
                target="_blank" rel="noopener noreferrer">
                <FontAwesome name="home"/>
              </a>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
};

export default Footer;
