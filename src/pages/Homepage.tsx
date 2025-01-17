import CPUCard from "../components/Cards/CPUCard";
import PlayersCard from "../components/Cards/PlayersCard";

const Homepage = () => {
    return (
        <>
            <div>
                <h1 className="flex justify-center text-2xl font-bold">Morpion</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 my-4">
                <PlayersCard />
                <CPUCard />
            </div>
        </>
    )
}

export default Homepage;