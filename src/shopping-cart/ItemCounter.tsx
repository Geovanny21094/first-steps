//rafc + tab
//> npm install  -D vitest,  para pruebas

import { useState } from "react";

// import './ItemCounter.css'
import styles from './ItemCounter.module.css'


interface Props {
    nameConsole: string;
    quantity?: number;
};



export const ItemCounter = ({ nameConsole, quantity = 1 }: Props) => {


    const [count, setCount] = useState(quantity)



    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSubtract = () => {
        if (count == 1) return;
        setCount(count - 1);
    };



    const handleClick = () => {
        console.log(console.log(`Click ${nameConsole}`))
    }





    return (
        <section className={styles['item-row']}
        // style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop: 10,
        // }
        // }
        >
            <span className={styles['item-text']}
                style={{

                    color: count == 1 ? 'red' : 'black',
                }}>{nameConsole}</span>

            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubtract}>-1</button>


        </section >
    )
}

export default ItemCounter
