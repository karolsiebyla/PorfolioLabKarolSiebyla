import React from 'react';
import ContainerRightMainSectionButton from "../SectionMain/ContainerRightMainSectionButton";
import icon1 from '../../../../assets/Icon-1.svg'
import icon2 from '../../../../assets/Icon-2.svg'
import icon3 from '../../../../assets/Icon-3.svg'
import icon4 from '../../../../assets/Icon-4.svg'
const FourStepSection = () => {
    return (
        <div className="container4StepSection">
            <div className="">
                <div className="titleAndDecoration">
                    <p className="text4step">
                        Wystarczą 4 proste kroki
                    </p>

                    <div className="decorationItem"></div>
                </div>

            <div className="articles4" >
                <article className="article-4-col article-4-col1">
                    <a href="">
                        <img src={icon1} alt='picture1' className="article-photo-img"/>
                    </a>

                    <h4 className="article-title">
                        Wybierz rzeczy
                    </h4>
                    <hr className="my-horizontal-line"></hr>
                    <p>
                        ubrania, zabawki, sprzęt i inne
                    </p>
                </article>
                <article className="article-4-col article-4-col2">
                    <a href="">
                        <img src={icon2} alt='picture2' className="article-photo-img"/>
                    </a>
                    <h4 className="article-title">
                        Spakuj je
                    </h4>
                    <hr className="my-horizontal-line"></hr>
                    <p>
                        skorzystaj z worków na smieci
                    </p>
                </article>
                <article className="article-4-col article-4-col3" >
                    <a href="">
                        <img src={icon3} alt='picture3' className="article-photo-img"/>
                    </a>
                    <h4 className="article-title">
                        Zdecyduj komu chcesz pomóc
                    </h4>
                    <hr className="my-horizontal-line"></hr>
                    <p>
                        wybierz zaufane miejsce
                    </p>
                </article>
                <article className="article-4-col article-4-col4">
                    <a href="">
                        <img src={icon4} alt='picture4' className="article-photo-img"/>
                    </a>
                    <h4 className="article-title">
                        Zamów kuriera
                    </h4>
                    <hr className="my-horizontal-line"></hr>
                    <p>
                        kurier przyjedzie w dogodnym terminie
                    </p>
                </article>
            </div>
                <div className="buttonAfter4parent">
                    <div className="buttonAfter4">
                        <ContainerRightMainSectionButton buttonText="ODDAJ RZECZY" navigateTo="/logowanie"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourStepSection;