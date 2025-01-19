import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router";

type PlayersAltModalProps = {
    show: boolean;
    onClose: () => void;
}

const PlayersAltModal =(props: PlayersAltModalProps) => {
    const [formData, setFormData] = useState({
        pseudoAP1: "Joueur 1",
        pseudoAP2: "Joueur 2"
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
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Morpion Alternatif - Jeu contre un autre joueur</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="pseudoAP1" value="Ton pseudo" />
                            </div>
                            <TextInput onChange={(e) => setFormData({...formData, pseudoAP1: e.target.value})} id="pseudoAP1" type="pseudo" name="pseudoAP1" value={formData.pseudoAP1} required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="pseudoAP2" value="Ton pseudo" />
                            </div>
                            <TextInput onChange={(e) => setFormData({...formData, pseudoAP2: e.target.value})} id="pseudoAP2" type="pseudo"  name="pseudoAP2" value={formData.pseudoAP2} required />
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

export default PlayersAltModal;