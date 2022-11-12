import React from 'react'
import '../assests/styles/play-game.css'

function Score({ score, setScore, setSelectedNumber }) {
    return (
        <div className='score-container'>
            <h1 className={score > 0 ? 'score-container-item1 green' : 'score-container-item1 red'}>{score}</h1>
            <h1 className='score-container-item2'>Total Score</h1>
            <button className='button-reset-score' onClick={() => { setScore(0); setSelectedNumber('') }}>Reset Score</button>
        </div>
    )
}

export default Score