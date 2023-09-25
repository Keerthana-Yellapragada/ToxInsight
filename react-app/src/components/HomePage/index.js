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
            <div className="homepage-content" >
               Many everyday consumer items conceal potentially dangerous chemicals under innocent - sounding terms like "fragrance"
               and "color." </div>
            <div className="homepage-content" > Type in a substance into the search bar below to uncover the true composition of the product and the health risks linked to these substances. </div>
            <div className="homepage-content">Stay informed!</div>
            <SearchBar />
         </div>
      </>
   )


}


export default HomePage;
