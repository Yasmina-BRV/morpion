import { Navbar } from "flowbite-react";
import circle from '../../assets/circle.svg'
import cross from '../../assets/cross.svg'

export function Nav() {
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand>
                    <a href="http://localhost:5173/">
                        <img src={cross} className="mr-3 h-6 sm:h-9" alt="Cross image" />
                    </a>
                    <a href="http://localhost:5173/">
                    <img src={circle} className="mr-3 h-6 sm:h-9 hover:shadow-lg shadow-second-shadow-500/50" alt="Circle image" />
                    </a>
                    <a href="http://localhost:5173/" className="self-center whitespace-nowrap text-xl font-semibold">Morpion</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="http://localhost:5173/" active>Accueil</Navbar.Link>
                    <Navbar.Link href="http://localhost:5173/rankings">Classement</Navbar.Link>
                    <Navbar.Link href="http://localhost:5173/game">Jeu</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}