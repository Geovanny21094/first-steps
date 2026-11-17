import type { CSSProperties } from "react";

const firstName = 'Geovanny';
const lastName = 'Abad';
const favouriteGames = ['God of war', 'Crash', 'Horizon']
const isActive = true;


const addres = {

    zipcode: '12345',
    country: 'ecuador',

}



const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,

}


export const MyAwesomeApp = () => {

    return (

        <>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{favouriteGames.join(', ')}</h1>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <h1>----------------</h1>
            <h1 style={myStyles
            }>{JSON.stringify(addres)}</h1>

            <h1>{addres.country}</h1>
            <h1>{addres.zipcode}</h1>
        </>

    )

}