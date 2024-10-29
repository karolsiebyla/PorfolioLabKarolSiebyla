import React from 'react';
import ContainerLeftMainSection from "./ContainerLeftMainSection";
import ContainerRightMainSection from "./ContainerRightMainSection";

const MainSection = () => {
    return (
        <div className="mainContainer container">
            <ContainerLeftMainSection/>
            <ContainerRightMainSection/>
           
        </div>
    );
};

export default MainSection;