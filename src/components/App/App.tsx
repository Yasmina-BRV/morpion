import { Route, Routes } from 'react-router'
import Rankings from '../../pages/Rankings'
import Game from '../../pages/Game'
import Homepage from '../../pages/Homepage'
import { Nav } from '../Navbar/Nav'


function App() {

    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/game" element={<Game />} /> 
                <Route path="/rankings" element={<Rankings />} /> 
            </Routes>

            <footer>
                <p className="flex justify-center mb-2">Copyright (c) 2025 - BRAVO Yasmina</p>
            </footer>
        </>
    )
}

export default App
