import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useNavigate } from "react-router";

type CPUAltModalProps = {
    show: boolean;
    onClose: () => void;
}

const CPUAltModal = (props: CPUAltModalProps) => {
    const navigate = useNavigate();

    const navigateToGame = () => {
        navigate("/game")
    }

    return (
        <Modal show={props.show} onClose={props.onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Morpion Alternatif - Jeu contre Ordinateur</h3>
                    <div className="mb-2 block">
                        <Label htmlFor="pseudo" value="Ton pseudo" />
                        <TextInput id="pseudoA" placeholder="Joueur" defaultValue={"Joueur"} required />
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Le pseudonyme est obligatoire, il sera utilisé pour le classement.
                        </p>
                    </div>
                    <div className="w-full">
                        <Button onClick={navigateToGame} type="submit" className="bg-medium-grey shadow-lg shadow-medium-grey-500/50 hover:bg-pale-grey">Jouer</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default CPUAltModal;