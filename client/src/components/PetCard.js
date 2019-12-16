import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PetCard extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="pet-card-container">
        <div className="image-container"></div>
        <div>name</div>
        <div>location</div>
        <Link to="/pet-name">Pet Profile</Link>
      </div>
    );
  }
}
 
export default PetCard;