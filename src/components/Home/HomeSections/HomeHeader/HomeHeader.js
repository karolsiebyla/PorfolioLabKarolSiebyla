import React from 'react';
import Navigation from "../../../Navigation/Navigation";
import Menu from "../../../Menu/Menu";

const HomeHeader = () => {
    return (
        <div className="homeHeader">
            <Navigation/>
            <Menu/>


        </div>
    );
};

export default HomeHeader;

/*<div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>*/