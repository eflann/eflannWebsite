import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import eflannery from './erin-headshot.jpg'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
        	<Image className='headshot' src={eflannery} circle/>
		  <h1>Erin Flannery</h1>
		  <p>
		    I'm currently a software engineer at Twilio. I graduated in 2017 from the University of Michigan with a BSE in Computer Science Engineering.
		  </p>
		</Jumbotron>
      </div>
    )
  }
}

export default HomePage;