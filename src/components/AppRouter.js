import React from "react";
import { Route, Navlink } from "react-router-dom";
import CharacterList from "./CharacterList.js";
import WelcomePage from "./WelcomePage.js";
import LocationsList from "./LocationsList.js";
import EpisodesList from "./EpisodesList.js";
const AppRouter = () => {
    return (
        <div>
            <div className="ui centered">
                <Route path="/" exact component={WelcomePage} />
                <Route path="/Character" exact component={CharacterList} />
                <Route path="/Location" exact component={LocationsList} />
                <Route path="/Episode" exact component={EpisodesList} />
            </div>
        </div>)
}
export default AppRouter;