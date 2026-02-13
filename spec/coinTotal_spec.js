import { coinTotal } from "../src/coinTotal.js";

describe ("coinTotal function",() => {
    it (`returns 0 when all inputs are 0`, () => {
        expect (coinTotal(0, 0, 0, 0, 0)).toBe(0);
    });
    it (`calculates mixed coin total correctly`,() => {
        expect (coinTotal(1, 1, 1, 1, 1)).toBeCloseTo(3.4,2);
    });

    it (`calculates larger quantities correctly`, () => {
        expect (coinTotal(10, 10, 4, 2, 3)).toBeCloseTo(10.5, 2);
    });
});