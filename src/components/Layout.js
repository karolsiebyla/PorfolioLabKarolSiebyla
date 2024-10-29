import React from 'react';
import HomeHeader from "./Home/HomeSections/HomeHeader/HomeHeader";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <HomeHeader/>
            <Outlet/>
        </>
    );
};

export default Layout;