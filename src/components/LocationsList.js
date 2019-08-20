import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js"



export default function LocationList() {
    // TODO: Add useState to track data from useEffect
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode")
            .then(res => {
                console.log(res)
                setLocation(res.data.results)
            })
            .catch(err => {
                console.log(err)
            });

        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, [location]);

    return (
        <section className="character-list grid-view">
            {location.map(res => {
                return (
                    <LocationCard location={res} />
                );
            })}
        </section>
    );
}

