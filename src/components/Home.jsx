import React, { useState } from 'react'
import StartGame from './StartGame'


function Home() {
    const [gameStarted, setGameStarted] = useState(false)
    return (
        <>
            {
                gameStarted ? <></> : <StartGame setGameStarted={setGameStarted} />}
        </>
    )
}

export default Home