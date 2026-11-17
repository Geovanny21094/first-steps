import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect } from "vitest";
import ItemCounter from "./ItemCounter";


describe('ItemCounter', () => {

    test('should render with default values', () => {


        const nameConsole = 'Nintendo Switch';

        render(<ItemCounter nameConsole={nameConsole} />)
        screen.debug();

        expect(screen.getByText(nameConsole)).toBeDefined();
        expect(screen.getByText(nameConsole)).not.toBeNull();
    })


    test('should render with custom quantity', () => {


        const nameConsole = 'Nintendo Switch';
        const quantity = 10;

        render(<ItemCounter nameConsole={nameConsole} quantity={quantity} />)

        expect(screen.getByText(quantity)).toBeDefined();
    })







    test('should increase count when +1 button is pressed'), () => {

        render(<ItemCounter nameConsole={'Test item'} quantity={1} />)

        const [buttonAdd] = screen.getAllByRole('button')

        console.log(buttonAdd.innerHTML)

        fireEvent.click(buttonAdd);

        expect(screen.getByAltText('2')).toBeDefined();

    }





    test('should decrease count when -1 button is pressed'), () => {

        const quantity = 5;

        render(<ItemCounter nameConsole={'Test item'} quantity={quantity} />)

        const [, buttonSubtract] = screen.getAllByRole('button')

        console.log(buttonSubtract.innerHTML)

        fireEvent.click(buttonSubtract);

        expect(screen.getByAltText('4')).toBeDefined();

    }



    test('should not decrease count when +1 button is pressed and quantity is 1'), () => {

        const quantity = 1;

        render(<ItemCounter nameConsole={'Test item'} quantity={quantity} />)

        const [, buttonSubtract] = screen.getAllByRole('button')

        console.log(buttonSubtract.innerHTML)

        fireEvent.click(buttonSubtract);

        expect(screen.getByAltText('1')).toBeDefined();


    }

})