import React, { useEffect, useState } from "react";
import axios from "axios";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        console.log((res)
        setCharacter(res.results)
      })
      .catch(err => {
        console.log(err)
      });

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {array.map(item => {
        return (
          <div>
            <name ={item.name}/>
           <species = {item.species}/>
           <gender = {item.gender}/>
         </div>
        )
      })}
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}


/*
  <div key={item.id}>
    <h2>{item.name}</h2>
    <p>{item.species}</p>
    <p>{item.gender}</p>
  </div>

*/