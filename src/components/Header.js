import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/add">
                    Add Food
                </NavLink>
                <NavLink to="/food">
                    See Food
                </NavLink>
            </nav>
        </header>
    )
}