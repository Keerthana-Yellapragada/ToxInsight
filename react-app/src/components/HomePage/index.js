import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import SearchBar from "../SearchBar/index.js";
import './HomePage.css'

function HomePage() {
   const dispatch = useDispatch()
   const history = useHistory()

   return (
      <>
         <div className="homepage-container">
            <h1 className="homepage-title">Welcome to ToxInsight!</h1>
            <div className="homepage-content">Thousands of harmful chemicals are hidden under seemingly harmless labels in products, such as "fragrance" and "color"!</div>
            <div className="homepage-content">Search for any chemical and we will provide you with the associated health risks and hazards</div>
            <div className="homepage-content">Stay informed!</div>
            <SearchBar />
         </div>
      </>
   )


}


export default HomePage;
