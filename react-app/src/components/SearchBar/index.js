import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import './searchBar.css'

function SearchBar() {
   const dispatch = useDispatch()
   const history = useHistory()

   return (
      <>
         <div className="searchBar-container">
            <h1 className="searchBar-title">Find out what lies hidden inside!</h1>
            <div className = "searchBar-content" > Enter a chemical or compound in the search box below to find out more! </div>
            <form>
               <input placeholder="Ex. Bisphenol-A">
               </input>
               <button>Look it up!</button>
            </form>
         </div>
      </>
   )


}


export default SearchBar;
