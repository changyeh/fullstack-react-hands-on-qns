import {useState} from 'react';

export default () => {
    let [dice, rollDice] = useState(1);
    return <div className="roll">
    <div className="dice"><span>{dice}</span></div>
    <button onClick={()=>
        rollDice(Math.floor(Math.random() * (6 - 1 + 1)) + 1)}>
        Roll Dice
    </button>
    </div>
}