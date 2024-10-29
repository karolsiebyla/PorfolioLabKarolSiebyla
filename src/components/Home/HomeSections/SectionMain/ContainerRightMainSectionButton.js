import React from 'react';
import {useNavigate} from "react-router-dom";

function ContainerRightMainSectionButton ({buttonText, navigateTo}) {

    const navigate = useNavigate();

    const goToNextPage = () => {
        navigate(navigateTo)
    }

    return (
        <div className="mainSectionButton">
            <button onClick={goToNextPage}>{buttonText}</button>
        </div>
    );
};

export default ContainerRightMainSectionButton;