import data from '../../../AdditionalCompanents/data.json'
import {Box, Button, Card, Flex, Text} from "@radix-ui/themes";
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
            btns.push(<Button onClick={() => setPage(i)} key={i} variant={i === page ? 'solid' : 'soft'}>{i}</Button>)
        }

        return btns
    }

    const renderElements = () => {
        // liczę ile wybrać elementów z dostępnych
        return active.elements.slice((page - 1) * pageLimit, page * pageLimit)
    }

    return (
        <>
            <Flex gap="3" justify="center">
                {data.map(({id, btn}) => (
                    <Button className="whoWeHelpButton" key={id} onClick={() => handleChangePage(id)}>{btn}</Button>
                ))}
            </Flex>
            <p className="whoWeHelpText">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
            <Box my="6">
                <Text as="div" align="center">{active.description} {active.id}</Text>
            </Box>

            <Flex align="center" direction="column" gap="3" mb="6">
                {renderElements().map(({id, title, text}) => (
                    <Box maxWidth="500px" key={id}>
                        <Card>
                            <Flex gap="3" align="center">
                                <Box>
                                    <Text as="div" size="2" weight="bold" color="tealw">
                                        {title} {id}
                                    </Text>
                                    <Text as="div" size="2" color="gray">
                                        {text}
                                    </Text>
                                </Box>
                            </Flex>
                        </Card>
                    </Box>
                ))}
            </Flex>
            <Flex gap="3" justify="center">
                {renderPageLinks()}
            </Flex>
        </>
    )
}

export default WhoWeHelp