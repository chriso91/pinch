import React, {Component} from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

class Contact extends Component{
  render(){
    return(
      <div>
        <Header page={"contact"}/>
          <div id="contact">
            <h1 className="headers">Contact</h1>
          </div>
        <Footer/>
      </div>
    )
  }
}

export default Contact;
