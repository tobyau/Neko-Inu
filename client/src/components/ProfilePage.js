import React, { Component } from 'react'
import { GlobalContext } from "../contexts/GlobalContext"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class ProfilePage extends Component {
  render() {
    return (
      <GlobalContext.Consumer>{(context) => {
        const { name, breed, image, animal_type, gender, age_years, age_months, zip, location } = context;
        console.log(image);
        return(
          <div className="pet-profile-container">
            <div className="list-home-back">
              <Link to="/" className="link"><ArrowBackIcon />Home</Link>
              <Link to="/list-page" className="link" id="arrow-list"><ArrowBackIcon />Back to results</Link>
            </div>
            <div className="pet-profile">
              <div>
                <img src={image} alt="" className="profile-img"/>
              </div>
              <div className="profile-description">
                <p>Hi! I'm {name} and I'm a {animal_type}</p>
                <p>These are my stats :)</p>
                <p>Breed: {breed}</p>
                <p>Gender: {gender}</p>
                <p>Age: {age_years} years and {age_months} old</p>
                <p>Location: {location}, {zip}</p>
              </div>
            </div>
          </div>
        );
      }}
      </GlobalContext.Consumer>
    )
  }
}

export default ProfilePage;