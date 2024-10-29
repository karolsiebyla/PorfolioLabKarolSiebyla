import React from 'react';
import ContainerRightMainSectionText from "./ContainerRightMainSectionText";
import ContainerRightMainSectionButton from "./ContainerRightMainSectionButton";

const ContainerRightMainSection = () => {
    return (
        <div className="mainContainerRightSection">


            <div className="">
            <ContainerRightMainSectionText/>
            </div>
            <div className="decoration decorationMainSection">

            </div>

            <div className="mainSectionButtons">
                <div>
                    <ContainerRightMainSectionButton buttonText="ODDAJ RZECZY" navigateTo="/logowanie"/>
                </div>
                <div>
                    <ContainerRightMainSectionButton buttonText="ZORGANIZUJ ZBIÓRKĘ" navigateTo="/logowanie"/>
                </div>

            </div>
        </div>
    );
};

export default ContainerRightMainSection;