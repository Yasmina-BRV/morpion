import { Button, Card } from "flowbite-react";
import CPUAltModal from "../Modals/CPUAltModal";
import { useState } from "react";
import CPUClassicModal from "../Modals/CPUClassicModal";

const CPUCard = () => {
    const [openCPUAltModal, setOpenCPUAltModal] = useState(false);
    const [openCPUClassicModal, setOpenCPUClassicModal] = useState(false);
    
    return (
        <Card className="max-w-sm">
            <h3 className="text-2xl font-bold tracking-tight">
            Jeu contre l'ordinateur
            </h3>
            <p>
                Pour pouvoir lancer une partie, il faut saisir un pseudonyme qui sera utilisé pour le classement.
            </p>

            <Button type="button" onClick={() => setOpenCPUClassicModal(true)} className="bg-pale-grey shadow-lg shadow-pale-grey-500/50 hover:bg-medium-grey">
                Morpion Classique
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
                </svg>
            </Button>
            <CPUClassicModal show={openCPUClassicModal} onClose={() => setOpenCPUClassicModal(false)} />

            <Button type="button" onClick={() => setOpenCPUAltModal(true)} className="bg-pale-grey shadow-lg shadow-pale-grey-500/50 hover:bg-medium-grey">
                Morpion Alternatif
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
                </svg>
            </Button>
            <CPUAltModal show={openCPUAltModal} onClose={() => setOpenCPUAltModal(false)} />
        </Card>
    )
}

export default CPUCard;