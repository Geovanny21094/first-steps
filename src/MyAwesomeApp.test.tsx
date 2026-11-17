

import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react'


describe('MyAwesomeApp'), () => {

    test('should render firstName and lastName', () => {

        const { container } = render(<MyAwesomeApp />);

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toBe('Geovanny');


    }
    )

}