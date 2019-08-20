import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodesCard from "./EpisodesCard.js"



export default function EpisodesList() {
    // TODO: Add useState to track data from useEffect
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode")
            .then(res => {
                console.log(res)
                setEpisode(res.data.results)
            })
            .catch(err => {
                console.log(err)
            });

        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, [episode]);

    return (
        <section className="character-list grid-view">
            {episode.map(res => {
                return (
                    <EpisodesCard episode={res} />
                );
            })}
        </section>
    );
}
