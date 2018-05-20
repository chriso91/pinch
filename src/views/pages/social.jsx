import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from '../components/header.jsx';
import FontAwesome from 'react-fontawesome';

class Social extends Component {
  render(){
    return(
      <div id='social'>
        <Header />
        <h1 className='title'>Social Media</h1>
        <div className='socialSites'>
          <Grid>
            <Row>
              <Col md={4} lg={4}>
                <div className='iconWrap'>
                  <a href='https://www.facebook.com/dccomedyevents/'>
                    <FontAwesome
                      name='facebook'
                      size='5x'
                      className="homes"/>
                  </a>
                </div>
              </Col>
              <Col md={4} lg={4}>
                <div className='iconWrap'>
                  <a href='#'>
                    <FontAwesome
                      name='instagram'
                      size='5x'
                      className="homes"/>
                  </a>
                </div>
              </Col>
              <Col md={4} lg={4}>
                <a href='#'>
                  <div className='iconWrap'>
                    <FontAwesome
                      name='twitter'
                      size='5x'
                      className="homes"/>
                  </div>
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Social;
