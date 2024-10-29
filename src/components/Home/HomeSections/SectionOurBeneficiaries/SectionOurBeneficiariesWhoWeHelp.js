import data from '../../../AdditionalCompanents/data'
import React, {useState} from "react";

const WhoWeHelp = () => {
    const [active, setActive] = useState(data.filter(({id}) => id === 1)[0]) // na start wybieram pierwszy
    const [page, setPage] = useState(1) // zawsze pierwsza strona jest aktywna w paginacji
    const pageLimit = 3 // limit elementów na stronie

    const handleChangePage = (elId) => {
        setActive(data.filter(({id}) => id === elId)[0]) // wybieram aktywny
        setPage(1) // kiedy zmieniamy to restartujemy paginacje
    }

    const renderPageLinks = () => {
        const btns = []

        // liczymy ile jest stron
        // przechodzimy od 1 do ilości stron
        // do każdego buttona przypisuje aktualizację state "page"
        for (let i= 1; i <= Math.ceil(active.elements.length / pageLimit); i++) {
            btns.push(
                /*<button className="myButton" onClick={() => setPage(i)} key={i} variant={i === page ? 'solid' : 'soft'}>{i}</button>*/ // krzyczy na variant

                <button
                    className={`myButton ${i === page ? 'solid' : 'soft'}`}
                    onClick={() => setPage(i)}
                    key={i}
                >
                    {i}
                </button>
            )
        }

        return btns
    }

    const renderElements = () => {
        // liczę ile wybrać elementów z dostępnych
        return active.elements.slice((page - 1) * pageLimit, page * pageLimit)
    }

    return (
        <>
            <div className="myFlexDiv">
                {data.map(({id, btn}) => (
                    <button className="whoWeHelpButton" key={id} onClick={() => handleChangePage(id)}>{btn}</button>
                ))}
            </div>
            <p className="whoWeHelpText">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                <br/>
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                <br/>
                komu pomagają i czego potrzebują.
            </p>
            <div className="sixBotton">
                <p className="divText" align="center">{active.description} {active.id}</p>
            </div>

            <div className="myFlexDivMiddle">
                {renderElements().map(({id, title, text}) => (
                    <div className="maxWidthFiveHundred" key={id}>
                        <div>
                            <div className="myFlexDiv">
                                <div>
                                    <p>
                                        {title} {id}
                                    </p>
                                    <p>
                                        {text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="myFlexDiv">
                {renderPageLinks()}
            </div>
        </>
    )
}
export default WhoWeHelp