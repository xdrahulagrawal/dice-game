import React, { useState } from 'react'
import PlayGame from './PlayGame'
import StartGame from './StartGame'


function Home() {
    const [gameStarted, setGameStarted] = useState(false)
    return (
        <>
            {
                gameStarted ? <PlayGame/> : <StartGame setGameStarted={setGameStarted} />}
        </>
    )
}

export default Home