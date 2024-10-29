import React from 'react';
import {Link} from "react-scroll";

const Menu = () => {
    return (
        <div className="menuDown">
            <nav>

                  <Link to="mainSection" smooth={true} duration={500}>Start</Link>

                  <Link to="fourStepSection" smooth={true} duration={500}>O co chodzi?</Link>

                  <Link to="sectionAboutOurOrg" smooth={true} duration={500}>O nas</Link>

                  <Link to="sectionOurBeneficiaries" smooth={true} duration={500}>Fundacje i organizacje</Link>

                  <Link to="sectionContactWithUs" smooth={true} duration={500}>Kontakt</Link>

            </nav>

        </div>
    );
};

export default Menu;