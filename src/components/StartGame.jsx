import dices from '../assests/images/dices.png'
import '../assests/styles/start-game.css'

function StartGame({ setGameStarted }) {
    return (
        <div className='home-container'>
            <img src={dices} alt='all-dices' width={450} className='home-container-item1' />
            <div className='home--sub-container'>
                <h1 className='home--sub-container-item1'>The Dice Game</h1>
                <button className='btn-start' onClick={() => setGameStarted(true)}>Start Game</button>
            </div>
        </div>
    )
}

export default StartGame