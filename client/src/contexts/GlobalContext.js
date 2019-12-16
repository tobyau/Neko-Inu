import React, { Component, createContext } from 'react'
import axios from 'axios'

export const GlobalContext = createContext();

export class GlobalContextProvider extends Component {
  state = {
    search_data: [],
    list_path: "",
    profile_path: "",
    age: 0,
    animal_type: "",
    breed: "",
    breeds_list: [],
    zip: 0,
    name: "",
    age_years: 0, 
    age_months: 0,
    gender: "",
    location: "",
    image: ""
  }
  
  submitForm = (input_state) => {
    const { age, animal_type, breed, breeds_list, zip } = input_state;
    this.setState({
      age: age,
      animal_type: animal_type,
      breed: breed,
      breeds_list: breeds_list,
      zip: zip,
    });
    
    const options = {
      "ZipCode": zip,
      "SearchRadiusInMiles": 50,
      "PageNumber": 1,
      "PetType": animal_type,
      "AgeYearsMax": age,
      "BreedsForDisplay": breed
    }
    
    axios.post("/api/search", options)
      .then(res => {
        this.setState({ search_data: res.data })
      })
      .catch((e) => {
        console.error(e);
      })
  }
  
  selectProfile = (object) => {
    console.log("global", object);
    this.setState({
      name: object.Name,
      animal_type: object.PetType,
      breed: object.BreedsForDisplay,
      age_years: object.AgeYears,
      age_months: object.AgeMonths,
      gender: object.Gender,
      location: object.City + ", " + object.State,
      image: object.PrimaryPhotoUrl
    })
  }
  
  render() {
    return (
      <GlobalContext.Provider value={{
        ...this.state, 
        submitForm: this.submitForm,
        selectProfile: this.selectProfile
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}