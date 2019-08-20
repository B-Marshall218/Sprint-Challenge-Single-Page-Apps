import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <div>
            <div className="ui center">
                <NavLink className="Nav" to={"/"}>Welcome</NavLink>
                <NavLink className="Nav" to={"/Character"}> Character</NavLink>
                <NavLink className="Nav" to={"/Location"}> Location</NavLink>
                <NavLink className="Nav" to={"/Episodes"}> Episodes</NavLink>
            </div>
        </div>
    )
}

// export default TabNav
