import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/" exact activeClassName="active">
                <span className="material-icons">home</span>               
            </NavLink>
            <NavLink to="/docs" exact activeClassName="active">
                <span classname="material-icons">code</span>
            </NavLink>
        </div>
    );
};

export default Sidebar
