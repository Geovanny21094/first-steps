
import { describe, expect, test } from 'vitest'
import { add, subtract, multiply } from './math.helper'


describe('add', () => {
    test('should add two positives number', () => {
        //1. Arrange
        const a = 1;
        const b = 2;

        //2. Act
        const result = add(a, b);

        //3. Assert
        expect(result).toBe(a + b);

        // const result = add(1, 3);
        // console.log({ result });

        // if (result != 2) {
        //     throw new Error('result not is 2')
        // }
        expect(result).toBe(4)
    });
})






describe('subtract', () => {
    test('should subtract two positives number', () => {
        //1. Arrange
        const a = 15;
        const b = 1;

        //2. Act
        const result = subtract(a, b);

        //3. Assert
        expect(result).toBe(a - b);

        expect(result).toBe(14)
    });
})






describe('multiply', () => {
    test('should multiply two positives number', () => {
        //1. Arrange
        const a = 6;
        const b = 2;

        //2. Act
        const result = multiply(6, 2);

        //3. Assert
        expect(result).toBe(a * b);

        expect(result).toBe(12)
    });
})