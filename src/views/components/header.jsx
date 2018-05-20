import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menu: 'hidden'
    };
  }

  menuToggle = () => {
    if (this.state.menu === 'hidden'){
      this.refs.headerMenu.style.display = 'inline';
      this.setState({menu:'view'});
    }
    else if (this.state.menu === 'view'){
      this.refs.headerMenu.style.display = 'none';
      this.setState({menu:'hidden'});
    }
  }

  render(){
    return(
      <div id="header">
        <div id="headerButton" onClick={this.menuToggle}>
          <div className="bars">
            <FontAwesome
              name='bars'
              size='2x'
            />
          </div>
        </div>

        <div id="headerMenu" ref="headerMenu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Events">Events</a></li>
            <li><a href="location">Location</a></li>
            <li><a href="/social">Social</a></li>
            <li><a href="/Bios">About Us</a></li>
            <li><a href="/openmic">Open Mic</a></li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Header;
