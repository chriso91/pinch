import React, { Component } from "react";
import Header from '../components/header.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import * as team0 from '../../assets/team.jsx';

class Bios extends Component {
  constructor(props){
    super(props);
    this.state = {
      team: team0.team
    }
  }

  alter = (i, item) => {
    if(window.innerWidth >= 768){
      if ((i) % 2 === 0) {
        if (item === "pic"){
          return "order-1";
        }
        else if (item === "words"){
          return "order-2 aleft";
        }
      }
      else if ((i) % 2 === 1){
        if (item === "pic"){
          return "order-2";
        }
        else if (item === "words"){
          return "order-1 aright";
        }
      }
    }
    else{
      if (item === "pic"){
          return "order-1";
      }
      else if (item === "words"){
        return "order-2"
      }
    }
  }

  render() {
    return (
        <div id="bios">
          <Header />
          <h1 className="title">Meet the Pinch Hitters</h1>
          <div className="member">
            {this.state.team.map((d, i) =>
              <Grid key={i}>
                <Row>
                  <Col md={4} lg={4} className={this.alter(i, "pic")}>
                    <img className="pic" src={d.picture}/>
                  </Col>
                  <Col md={8} lg={8} className={this.alter(i, "words")}>
                    <img src={d.backpicture} className="backImage"/>
                    <h1 className="name">{d.name}</h1>
                    <p className="bio">{d.bio}</p>
                  </Col>
                </Row>
                <Row>
                  <hr className="shadowBar"></hr>
                </Row>
              </Grid>)}
          </div>
          <h1 className="lll">
            <span className="liveLove">Live...</span> <span className="liveLove">Love...</span> Laugh
          </h1>
        </div>
    );
  }
}

export default Bios;
