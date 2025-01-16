import CPUAltCard from "../components/Cards/CPUAltCard";
import CPUClassicCard from "../components/Cards/CPUClassicCard";
import PlayersAltCard from "../components/Cards/PlayersAltCard";
import PlayersClassicCard from "../components/Cards/PlayersClassicCard";


const Homepage = () => {
    return (
        <>
        <div>
            <h1 className="flex justify-center text-2xl font-bold">Morpion</h1>
            <h2 className="flex justify-center text-xl my-2">4 modes de jeu possibles!</h2>
        </div>

        <div className="flex flex-col">
            <h2 className="flex justify-center text-xl mb-2">Version classique</h2>
            <p className="flex text-center">
                La version de base se joue sur une grille de trois par trois (9 cases réparties en trois lignes et trois colonnes). Les joueurs, à tour de rôle, placent sur une cellule libre le symbole qu'ils jouent durant cette partie. Les symboles sont : ● X (croix) ● O (rond) Dès que trois symboles identiques forment une ligne droite continue (ligne, colonne ou diagonale), la partie prend fin. Le joueur réalisant cette ligne sera considéré comme vainqueur de la partie. Si toute la grille est occupée, mais qu'aucune ligne n'est construite, la partie prend également fin. Il n'y a pas de vainqueur dans ce cas de figure (ni de perdant).
            </p>
            <div className="flex flex-col justify-center items-center gap-4 my-4">
                <CPUClassicCard />
                <PlayersClassicCard />
            </div>
        </div>

        <div className="flex flex-col my-4">
            <h2 className="flex justify-center text-xl mb-2">Version Alternative</h2>
            <p className="flex text-center">
                Cette version alternative reprend les mêmes règles que la version classique, à une seule exception. Seuls trois croix et trois ronds peuvent être au maximum présents sur la grille. Le quatrième symbole remplace alors le premier posé. Le cinquième symbole remplace le deuxième et ainsi de suite.
            </p>
            <div className="flex flex-col justify-center items-center gap-4 my-4">
                <CPUAltCard />
                <PlayersAltCard />
            </div>
            
        </div>
        </>
    )
}

export default Homepage;