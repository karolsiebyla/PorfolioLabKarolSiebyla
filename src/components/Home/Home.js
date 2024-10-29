import React from 'react';
import MainSection from "./HomeSections/SectionMain/MainSection";
import SectionThreeColumn from "./HomeSections/SectionThreeColumn/SectionThreeColumn";
import FourStepSection from "./HomeSections/SectionFourStep/FourStepSection";
import SectionAboutOurOrg from "./HomeSections/SectionAboutOurOrg/SectionAboutOurOrg";
import SectionOurBeneficiaries from "./HomeSections/SectionOurBeneficiaries/SectionOurBeneficiaries";
import SectionContactWithUs from "./HomeSections/SectionContactWithUs/SectionContactWithUs";
import SectionFooter from "./HomeSections/SectionFooter/SectionFooter";
import {Element} from "react-scroll";

const Home = () => {
    return (
        <>


            <Element name= 'mainSection'>
                <MainSection/>
                <SectionThreeColumn/>
            </Element>


            <Element name="fourStepSection" >
                <FourStepSection/>
            </Element>


            <Element name="sectionAboutOurOrg">
                <SectionAboutOurOrg/>
            </Element>


            <Element name= 'sectionOurBeneficiaries'>
                <SectionOurBeneficiaries/>
            </Element>

            {/*<div style={{height: '3000px'}}></div>*/}
            <Element name="sectionContactWithUs">
                <SectionContactWithUs/>
            </Element>
            <SectionFooter/>
        </>
    );
};

export default Home;