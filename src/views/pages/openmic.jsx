import React, {Component} from 'react';
import Header from '../components/header.jsx';
import openback from '../../assets/images/openmicback.png';

class OpenMic extends Component {
  render(){
    return(
      <div id='openmic'>
        <Header />
        <h1 className="title">Open Mic</h1>
        <h3 className="subTitle">Open Up A Little</h3>
        <div className="strip1"></div>
        <div className="strip2"></div>
        <div className="blackBox"></div>
        <img className="micImg" src={openback}></img>
        <p className="openWriteUp">Stop by every Tuesday night and checkout
        Punchlines at the Pinch, our weekly open mic.  Here you can see
        comics at a wide variety of experiences trying out new material
        or polishing up their jokes.
        <br></br>
        Everyone is welcome to sign up.  You can sign up on site or email
        ahead of time to secure your place on the list.
        <br></br>
        <a href="mailto:pinchhittersopenmic@gmail.com">PinchHittersOpenMic@gmail.com</a>
        <br></br>
        The usual time of the open mic is sign up starting at 8:30 pm and
        the show at 9:00 pm but this is subject to change depending on
        the other events that are happening at this venu.  Check facebook
        to confirm the start of the mic.</p>
      </div>
    )
  }
}

export default OpenMic;
