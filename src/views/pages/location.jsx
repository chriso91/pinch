import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from '../components/header';
import outside from '../../assets/images/outside.png';
import greenguy from '../../assets/images/greenguy.png';
import stairs from '../../assets/images/stairs.png';
import lampfar from '../../assets/images/lampfar.png';

class Location extends Component {
  render(){
    return(
      <div id='location'>
        <Header />
        <h1 className="title">Location</h1>
        <h3 className="subTitle">Come on Down and See Us</h3>
        <div className="stripe s1"></div>
        <div className="stripe s2"></div>
        <div className="stripe s3"></div>
        <Grid>
          <Row>
            <Col md={3} lg={3}>
              <img src={outside}/>
            </Col>
            <Col md={3} lg={3}>
              <img src={stairs}/>
            </Col>
            <Col md={3} lg={3}>
              <img src={greenguy}/>
            </Col>
            <Col md={3} lg={3}>
              <img src={lampfar}/>
            </Col>
          </Row>
          <Row>
            <a href='https://www.google.com/maps/place/The+Pinch/@38.935853,-77.0331469,15z/data=!4m2!3m1!1s0x0:0x2511180a6763a2c8?sa=X&ved=0ahUKEwj8m-z0tLbbAhXHxlkKHbmRCSEQ_BIIwwEwDw' className='link address'>3548 14th St NW, Washington, DC 20010</a>
            <p className="locationdesc">The Pinch Hitters put on open mics and shows in The Pinch's show area
            located in the basement.  The Pinch is located in Columbia Heights
            near the Georgia Ave-Petworth Metro Station (Green/Yellow line).</p>
            <p className="locationdesc">Checkout the Pinch on
              <a href='https://www.yelp.com/biz/the-pinch-washington' className='link'> Yelp, </a>
              <a href='https://www.facebook.com/thepinchdc/' className='link'>Facebook, </a> and
              <a href='https://twitter.com/thepinchdc' className='link'> Twitter</a>.
            </p>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Location;
