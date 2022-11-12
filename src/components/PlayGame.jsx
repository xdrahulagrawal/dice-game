import React, { useState } from 'react';
import ImageContainer from './ImageContainer';
import SelectButton from './SelectButton';
import Score from './Score';
import '../assests/styles/play-game.css'


function PlayGame() {
    const [selectedNumber, setSelectedNumber] = useState('')
    const [score, setScore] = useState(0)
    const [dices, setDices] = useState(1);
    const [error, setError] = useState(null);

    //Get Number when user click any number
    const _onClickSedelectedNumber = (value) => {
        setSelectedNumber(value)
        setError('')
    }

    const _generateRandomNumber = () => {
        const generatedNum = Math.ceil(Math.random() * 6)
        if (selectedNumber) {
            setDices(generatedNum)
            if (generatedNum === +selectedNumber) {
                console.log({ generatedNum, selectedNumber });
                setScore(prev => prev + 10)
                return
            }
            setScore(prev => prev - 10)
            return
        }
        setError('Please select number')
    }

    return (
        <div className='play-game-container'>

            <h1 className='play-game-container-item1-heading'>{error ? error : 'Select Number'}</h1>
            <SelectButton selectedNumber={selectedNumber} _onClickSedelectedNumber={_onClickSedelectedNumber} />

            <ImageContainer dices={dices} _generateRandomNumber={_generateRandomNumber} />

            <p className='para-dice'>Click on dice to roll</p>
            <Score score={score} setScore={setScore} setSelectedNumber={setSelectedNumber} />
        </div>
    )
}

export default PlayGame