import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

type CPUAltModalProps = {
    show: boolean;
    onClose: () => void;
}

const CPUAltModal = (props: CPUAltModalProps) => {
        const [formData, setFormData] = useState({
                    pseudoA: ""
                });
            
                const handleSubmit = (e: { preventDefault: () => void; }) => {
                    e.preventDefault()
                    console.log(formData);
                };

    return (
        <Modal show={props.show} onClose={props.onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Morpion Alternatif - Jeu contre l'ordinateur</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="pseudoA" value="Ton pseudo" />
                            </div>
                            <TextInput onChange={(e) => setFormData({...formData, pseudoA: e.target.value})} id="pseudoA" type="pseudo" name="pseudoA" value={formData.pseudoA} placeholder="Joueur" required />
                        </div>
                        <p>
                            Le pseudonyme est obligatoire, il sera utilisé pour le classement.
                        </p>
                        <Button type="submit" className="bg-pale-grey shadow-lg shadow-pale-grey-500/50 hover:bg-medium-grey">Jouer</Button>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default CPUAltModal;