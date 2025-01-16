import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useNavigate } from "react-router";

type PlayersAltModalProps = {
    show: boolean;
    onClose: () => void;
}

const PlayersAltModal =(props: PlayersAltModalProps) => {
    const navigate = useNavigate();

    const navigateToGame = () => {
        navigate("/game")
    }
    
    return(
        <Modal show={props.show} onClose={props.onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Morpion Alternatif - Jeu contre un autre joueur</h3>
                    <div className="mb-2 block">
                        <Label htmlFor="pseudo" value="Pseudo Joueur 1" />
                        <TextInput id="pseudoP1A" defaultValue={"Joueur 1"} required />
                    </div>
                    <div className="mb-2 block">
                        <Label htmlFor="pseudo" value="Pseudo Joueur 2" />
                        <TextInput id="pseudoP2A" defaultValue={"Joueur 2"} required />
                    </div>
                    <div className="w-full">
                        <Button onClick={navigateToGame} className="bg-medium-grey shadow-lg shadow-medium-grey-500/50 hover:bg-pale-grey">Jouer</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default PlayersAltModal;