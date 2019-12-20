import React from 'react'
import InputForm from './InputForm'
import SamoHome from '../assets/home1.jpg'

const HomePage = () => {
  return(
    <div className="homepage-container">
      <h1 className="text-center home-title">Neko & Inu</h1>
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
}

export default HomePage;