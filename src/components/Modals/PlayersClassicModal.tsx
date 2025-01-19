import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router";

type PLayersClassicModalProps = {
    show: boolean;
    onClose: () => void;
}

const PlayersClassicModal = (props: PLayersClassicModalProps) => {
    const [formData, setFormData] = useState({
        pseudoCP1: "Joueur 1",
        pseudoCP2: "Joueur 2"
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(formData);
    };

    const navigate = useNavigate();
    const navigateToGame = () => {
        navigate("/game");
    };
    
    return(
        <Modal show={props.show} onClose={props.onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Morpion Classique - Jeu contre un autre joueur</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="pseudoCP1" value="Ton pseudo" />
                            </div>
                            <TextInput onChange={(e) => setFormData({...formData, pseudoCP1: e.target.value})} id="pseudoCP1" type="pseudo" name="pseudoCP1" value={formData.pseudoCP1} required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="pseudoCP2" value="Ton pseudo" />
                            </div>
                            <TextInput onChange={(e) => setFormData({...formData, pseudoCP2: e.target.value})} id="pseudoCP2" type="pseudo" name="pseudoCP2" value={formData.pseudoCP2} required />
                        </div>
                        
                        <p>
                            Les pseudonymes étant facultatifs, des valeurs par défaut sont proposées.
                        </p>
                        <Button onClick={navigateToGame} type="submit" className="bg-pale-grey shadow-lg shadow-pale-grey-500/50 hover:bg-medium-grey">Jouer</Button>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default PlayersClassicModal;