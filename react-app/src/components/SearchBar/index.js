import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import './searchBar.css'

function SearchBar() {
   const dispatch = useDispatch()
   const history = useHistory()

   const [searchInput, setSearchInput] = useState("");

   const hazards = [

      { name: "bisphenol-A", disease: "endocrine disrupter" },
      { name: "pthalates", disease: "endocrine disrupter" },
      { name: "DDT", disease: "endocrine disrupter" },
      { name: "oxybenzone/Benzophenone-3", disease: "toxic to coral reefs" },

   ];

   const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
   };

   if (searchInput.length > 0) {
      hazards.filter((hazard) => {
         return hazard.name.match(searchInput);
      });
   }


   return (
      <>
         <div className="searchBar-container">
            <h1 className="searchBar-title">Find out what lies hidden inside!</h1>
            <div className="searchBar-content" > Enter a chemical or compound in the search box below to find out more! </div>
            <form >
               <input
                  className='search-input'
                  placeholder="Ex. Bisphenol-A"
                  type="text"
                  onChange={handleChange}
                  value={searchInput} />

               <button>Look it up!</button>

               <table>
                  <tr>
                     <th>Chemical</th>
                     <th>Hazard</th>

                  </tr>

                  {hazards.map((hazard, index)=>{

                     <tr>
                        <td>{hazard.name}</td>
                        <td>{hazard.disease}</td>

                     </tr>

                  })}
               </table>
            </form>
         </div>
      </>
   )


}


export default SearchBar;
