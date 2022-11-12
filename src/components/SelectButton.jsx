import React from 'react'
import '../assests/styles/play-game.css'


function SelectButton({selectedNumber,_onClickSedelectedNumber}) {
    const numbers = [1, 2, 3, 4, 5, 6]

  return (
    <div className='play-game-container-item2-numbers'>
    {
        numbers.map((num, index) => {
            return <button className={selectedNumber === num ? "button-selected-number" : 'button-numbers'} key={index} onClick={() =>{ _onClickSedelectedNumber(num)}}>{num}</button>
        })
    }
</div>
  )
}

export default SelectButton