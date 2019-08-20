import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter]= useState([]);

  useEffect(() => {
    axios.get("https://rick-api.herokuapp.com/api/character/")
      .then(res => {
        console.log(res)
        setCharacter(res.data.results)
      })
      .catch(err => {
        console.log(err)
      });

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [character]);

  return (
    <section className="character-list grid-view">
      {character.map( res => {
        return (
          <CharacterCard character={res}/>
        );
      })}
    </section>
  );
}
