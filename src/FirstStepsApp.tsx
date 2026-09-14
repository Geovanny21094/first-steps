import ItemCounter from "./shopping-cart/ItemCounter";



interface ItemInCar {
    productName: string;
    quantity: number;
}

const itemsInCar: ItemInCar[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },

    { productName: 'PS5', quantity: 2 },

    { productName: 'X Box', quantity: 3 },

]


export function FirstStepsApp() {


    return (
        <>
            <h1>Carrito de compras</h1>
            {/* <ItemCounter nameConsole='Ps5' quantity={4} />
            <ItemCounter nameConsole='Nintendo Switch' quantity={5} />
            <ItemCounter nameConsole='X box' quantity={6} /> */}

            {itemsInCar.map(({ productName, quantity }) => (
                <ItemCounter key={productName} nameConsole={productName} quantity={quantity} />

            ))}

        </>
    );
}