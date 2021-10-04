import React from 'react';
import "./MenuBar.css";

import { Link, NavLink } from "react-router-dom";
const MenuBar = () => {
    return (
        <div className="MenuBar-container">
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <NavLink to="/home" className="items">
                                    <li>Home</li>
                                </NavLink>
                                <NavLink to="/services" className="items">
                                    <li>Services</li>
                                </NavLink>
                                <NavLink to="/about" className="items">
                                    <li>About us</li>
                                </NavLink>
                                <NavLink to="/instructor" className="items">
                                    <li>Instructor</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;