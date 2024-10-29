import React from 'react';
import ContainerRightMainSectionButton from "../../Home/HomeSections/SectionMain/ContainerRightMainSectionButton";

const Logout = () => {
    return (
        <div className="containerRegister">
            <h3>
                Wylogowanie nastąpiło pomyślnie!
            </h3>
            <div className="decoration"></div>
            <div>
                <div>

                    <div className="registerButtons">
                        <ContainerRightMainSectionButton buttonText="Strona główna" navigateTo="/"/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Logout;