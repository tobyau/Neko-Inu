import React, { Component } from 'react'
import { GlobalContext } from "../contexts/GlobalContext"
import { TextField, FormControl, InputLabel, Button, NativeSelect } from '@material-ui/core'
import { Link } from 'react-router-dom'
import axios from 'axios'


class InputForm extends Component {
  state = {
    animal_type: "",
    breed: "",
    error: false,
    zip: 0,
    age: 0,
    disabled: true,
    breeds_list: []
  }
  
  componentDidUpdate() {
    this.fetchSearchData();
  }
  
  fetchSearchData = () => {
    const { zip, animal_type, age } = this.state;
    
    if(zip && animal_type && age) {
      const options = {
        "ZipCode": zip,
        "SearchRadiusInMiles": 50,
        "PageNumber": 1,
        "PetType": animal_type,
        "AgeYearsMax": age,
      }
      
      var breeds_no_dups = [];
      
      axios.post("/api/search", options)
        .then(res => {        
          res.data.map((key) => {
            return key.BreedsForDisplay;
          }).forEach((item) => { 
            if (breeds_no_dups.indexOf(item) === -1) breeds_no_dups.push(item) 
          });
          
          this.setState({ breeds_list: breeds_no_dups });
          
        })
        .catch((e) => {
          console.error(e);
        })
    }
  }
  
  zipChange = event => {
    this.setState({ zip: event.target.value });
  }
  
  ageChange = event => {
    this.setState({ age: event.target.value });
  }
  
  selectType = (event) => {
    this.setState({ 
      animal_type: event.target.value
    });
  }
  
  selectBreed = event => {
    this.setState({ 
      breed: event.target.value,
      disabled: false
    });
  }
  
  render() {
    
    return(
      <GlobalContext.Consumer>{( context ) => {
        
        const { submitForm } = context;

        const { animal_type, breed, error, disabled, breeds_list } = this.state;
        
        return (
          <div className="input-form-container">
            <h2>Find a Pet: </h2>
            <form className="form-container" noValidate autoComplete="off">
              <TextField
                className="form-field"
                error = {error}
                id="outlined-password-input"
                type="number"
                label="Zip Code (90001)"
                variant="outlined"
                onChange={this.zipChange}
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,5)
                }}
              />
              <FormControl className="form-field dropdown-type">
                <InputLabel htmlFor="demo-customized-select-native">Type</InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={animal_type}
                  onChange={this.selectType}
                >
                  <option value=""></option>
                  <option value="dog">dog</option>
                  <option value="cat">cat</option>
                </NativeSelect>
              </FormControl>
              
              <TextField
                className="form-field"
                error = {error}
                type="number"
                label="Max Age (Years)"
                variant="outlined"
                onChange={this.ageChange}
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
                }}
              />
              
              <FormControl className="form-field dropdown-breed">
                <InputLabel htmlFor="demo-customized-select-native">Breed</InputLabel>
                <NativeSelect
                  value={breed}
                  onChange={this.selectBreed}
                >
                  <option value=""></option>
                  {breeds_list.map((breed, index) => (
                    <option key={index} value={breed}>{breed}</option>
                  ))}
                </NativeSelect>
              </FormControl>
              <Link to="/list-page" className="router-link">
                <Button
                  variant="contained"
                  color="primary"
                  className=""
                  disabled={disabled}
                  onClick={() => submitForm(this.state)}
                >Send</Button>
              </Link>
            </form>
          </div>
        )
      }}</GlobalContext.Consumer>
    );
  }
}

export default InputForm;