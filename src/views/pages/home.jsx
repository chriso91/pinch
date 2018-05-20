import React, { Component } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import {Grid, Row, Col} from 'react-bootstrap';
import singer from '../../assets/images/singersq.png';
import greenguy from '../../assets/images/greenguysq.png';
import openmic from '../../assets/images/openmicsq.png';
import venu from '../../assets/images/pinchfull.png';
import lamp from '../../assets/images/lampnearsq.png';
import * as team0 from '../../assets/team.jsx';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      team: team0.team
    }
  }

  resize = () => this.setNarrow()

  componentDidMount() {
    this.changeWheel();
    this.setNarrow();
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  changeWheel(){
    let count=1;
    setInterval(() => {
      this.refs.name.innerHTML = this.state.team[count].name;
      this.refs.words.innerHTML = this.state.team[count].words;
      this.refs.image.src = this.state.team[count].picture;
      if (count  >= this.state.team.length-1){
        count = 0;
      }
      else {
        count++;
      }
    }, 5000);
  }

  setNarrow(){
    if(window.innerWidth >= 770){
      this.refs.mainMenuNarrow.style.display = 'none';
      this.refs.mainMenuWide.style.display = 'inline';
    }
    else if (window.innerWidth < 770){
      this.refs.mainMenuWide.style.display = 'none';
      this.refs.mainMenuNarrow.style.display = 'inline';
    }
  }

  render() {
    return (
      <div id="home">
        <div id="mainMenuWide" ref="mainMenuWide">
          <div className="strip"></div>
          <Grid>
            <Row>
              <Col md={4} lg={4}>
                <a href='/Events' className="menuButtons">
                  <h1 className="buttonText">Events</h1>
                  <img src={venu}/>
                </a>
              </Col>
              <Col md={4} lg={4}>
                <a href='/location' className="menuButtons">
                  <h1 className="buttonText">Location</h1>
                  <img src={greenguy}/>
                </a>
              </Col>
              <Col md={4} lg={4}>
                <a href='/social' className="menuButtons">
                  <h1 className="buttonText">Social Media</h1>
                  <img src={lamp} />
                </a>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <div className="titleDiv">
                  <h1>The Pinch Hitters Standup</h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4} lg={4}>
                <a href='/bios' className="menuButtons">
                  <h1 className="buttonText">About Us</h1>
                  <img src={singer}/>
                </a>
              </Col>
              <Col md={4} lg={4}>
                <div className='team' ref="team">
                    <img id='image' className='image' ref='image'
                      src={this.state.team[0].picture}/>
                    <h3 ref='name' id='name'>{this.state.team[0].name}</h3>
                    <p ref='words'>{this.state.team[0].words}</p>
                </div>
              </Col>
              <Col md={4} lg={4}>
                <a href='/openmic' className="menuButtons">
                  <h1 className="buttonText">Open Mic</h1>
                  <img src={openmic}/>
                </a>
              </Col>
            </Row>
          </Grid>
        </div>

        <div id="mainMenuNarrow" ref="mainMenuNarrow">
          <div className="strip"></div>
          <div className="titleDiv">
            <h1>The Pinch Hitters Standup</h1>
          </div>
          <a href='/Events' className="menuButtons">
            <h1 className="buttonText">Events</h1>
            <img src={venu}/>
          </a>
          <a href='/location' className="menuButtons">
            <h1 className="buttonText">Location</h1>
            <img src={greenguy}/>
          </a>
          <a href='/social' className="menuButtons">
            <h1 className="buttonText">Social Media</h1>
            <img src={lamp} />
          </a>
          <a href='/bios' className="menuButtons">
            <h1 className="buttonText">About Us</h1>
            <img src={singer}/>
          </a>
          <a href='/openmic' className="menuButtons">
            <h1 className="buttonText">Open Mic</h1>
            <img src={openmic}/>
          </a>
        </div>
      </div>
    );
  }
}
