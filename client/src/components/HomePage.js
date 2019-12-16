import React from 'react'
import InputForm from './InputForm'
import { GlobalContext } from "../contexts/GlobalContext"
import SamoHome from '../assets/dogs/samoyed/home1.jpg'

const HomePage = () => {
  return(
    <GlobalContext.Consumer>{( context ) => {
      
      return(
        <div className="homepage-container">
          <h1 className="text-center home-title">Petto</h1>
          <div className="header">
            <img src={SamoHome} alt="samooo" className="header-image"/>
            <div className="header-text">
              <p>Henlo</p>
              <p>My friends and I need your help</p>
              <p>to find chimken!</p>
            </div>
          </div>
          <InputForm />
        </div>
      );
    }}
    </GlobalContext.Consumer>
  );
}

export default HomePage;