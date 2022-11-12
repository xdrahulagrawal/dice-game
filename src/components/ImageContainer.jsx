import React, { useState } from 'react';
import dice1 from '../assests/images/dice1.png'
import dice2 from '../assests/images/dice2.png'
import dice3 from '../assests/images/dice3.png'
import dice4 from '../assests/images/dice4.png'
import dice5 from '../assests/images/dice5.png'
import dice6 from '../assests/images/dice6.png'

function ImageContainer({dices,_generateRandomNumber}) {
    const images = [dice1, dice2, dice3, dice4, dice4, dice5, dice6]

    return (
        <div className='img-container' onClick={_generateRandomNumber}>
            <img src={images[dices]} alt={dice1} />
        </div>
    )
}

export default ImageContainer