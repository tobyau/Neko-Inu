import React, { Component } from 'react'
import { GlobalContext } from "../contexts/GlobalContext"
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

class PetListPage extends Component {
  
  selected = (object, selectFunc) => {
    selectFunc(object);
  }
  
  render() {
    return (
      <GlobalContext.Consumer>{(context) => {
        const { search_data, selectProfile, breed } = context; 
        
        var pet_cards = search_data.map((object, key) => {
          if(object.BreedsForDisplay === breed) {
            return (
              <div className="card-container" key={key}>
                <img src={object.PrimaryPhotoUrl} alt="" />
                <div className="description">
                  <p><b>Name: </b>{object.Name}</p>
                  <p><b>Breed: </b>{object.BreedsForDisplay}</p>
                  <p><b>Age: </b>{object.AgeYears} years and {object.AgeMonths} months old.</p>
                  <p><b>Location: </b>{object.City}, {object.State}</p>
                  <Link 
                    to="/pet-profile" 
                    onClick={() => {
                      this.selected(object, selectProfile);
                    }}>
                    <Button
                        variant="contained"
                        color="primary"
                      >More Details</Button>
                  </Link>
                </div>
              </div>
            );
          }
        })
        
        return (
          <div>
            <h2 className="text-center list-page">Search Results: {breed}</h2>
            <Link to="/" className="link" id="arrow-new-search"><ArrowBackIcon />Make a new search</Link>
            <div className="cards-list">
              {pet_cards}
            </div>
          </div>
        );
      }}
      </ GlobalContext.Consumer>
    )
  }
}

export default PetListPage;