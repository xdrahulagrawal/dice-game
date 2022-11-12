import React from 'react'
import '../assests/styles/play-game.css'


function PlayGame() {
    const numbers = [1, 2, 3, 4, 5, 6]
    return (
        <div className='play-game-container'>
            <h1 className='play-game-container-item1-heading'>Select Number</h1>
            <div className='play-game-container-item2-numbers'>
                {
                    numbers.map((num, index) => {
                        return <button className='button-numbers' key={index}>{num}</button>
                    })
                }
            </div>
        </div>
    )
}

export default PlayGame