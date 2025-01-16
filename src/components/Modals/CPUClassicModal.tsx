import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useNavigate } from "react-router";

type CPUClassicModalProps = {
    show: boolean;
    onClose: () => void;
}

const CPUClassicModal = (props: CPUClassicModalProps) => {
    const navigate = useNavigate();

    const navigateToGame = () => {
        navigate("/game")
    }
    
    return (
        <Modal show={props.show} onClose={props.onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium dark:text-white">Morpion Classique - Jeu contre Ordinateur</h3>
                    <div className="mb-2 block">
                        <Label htmlFor="pseudo" value="Ton pseudo" />
                        <TextInput id="pseudoC" placeholder="Joueur" defaultValue={"Joueur"} required />
                        <p>
                            Le pseudonyme est obligatoire, il sera utilisé pour le classement.
                        </p>
                    </div>
                    <div className="w-full">
                        <Button onClick={navigateToGame} className="bg-medium-grey shadow-lg shadow-medium-grey-500/50 hover:bg-pale-grey">Jouer</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default CPUClassicModal;
