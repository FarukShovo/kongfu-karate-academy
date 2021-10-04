import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css'

const Header = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <MenuBar></MenuBar>
                    <div className="col-md-6">
                        <h1 className="title">
                            BE HEALTHY <br />
                            TO <br />
                            ENJOY YOUR LIFE
                        </h1>


                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;