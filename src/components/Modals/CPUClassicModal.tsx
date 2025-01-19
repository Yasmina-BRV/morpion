import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router";

type CPUClassicModalProps = {
    show: boolean;
    onClose: () => void;
}

const CPUClassicModal = (props: CPUClassicModalProps) => {
    const [formData, setFormData] = useState({
        pseudoC: ""
    });
        
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(formData);
    };

    const navigate = useNavigate();
    const navigateToGame = () => {
        navigate("/game");
    };
    
    return (
        <Modal show={props.show} onClose={props.onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium dark:text-white">Morpion Classique - Jeu contre l'ordinateur</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="pseudoC" value="Ton pseudo" />
                            </div>
                            <TextInput onChange={(e) => setFormData({...formData, pseudoC: e.target.value})} id="pseudoC" type="pseudo" name="pseudoC" value={formData.pseudoC} placeholder="Joueur" required />
                        </div>
                        <p>
                            Le pseudonyme est obligatoire, il sera utilisé pour le classement.
                        </p>
                        <Button onClick={navigateToGame} type="submit" className="bg-pale-grey shadow-lg shadow-pale-grey-500/50 hover:bg-medium-grey">Jouer</Button>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default CPUClassicModal;
