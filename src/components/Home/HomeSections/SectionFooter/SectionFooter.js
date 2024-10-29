import React from 'react';
import Facebook from '../../../../assets/Facebook.svg'
import Instagram from '../../../../assets/Instagram.svg'

const SectionFooter = () => {
    return (
        <div className="footer">
            <div className="footerContainer">

                <div className="copyright">
                    Copyright by Coders Lab
                </div>

                <div className="icons">
                    <a href=""><img src={Facebook} alt={Facebook} className="FacebookIcon"/></a>
                    <a href=""><img src={Instagram} alt={Instagram} className="InstagramIcon"/></a>
                </div>

            </div>
        </div>
    );
};

export default SectionFooter;
