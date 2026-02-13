import { fahrenheit2celsius } from "../src/fahrenheit2celsius.js";

    describe ("testing fahrenheit to celsius", function (){
    it ("tests for freezing of water", function (){
        let nFreezing = fahrenheit2celsius (32);
        expect (nFreezing).toBe(0);
    })
    it ("tests for boiling of water", function (){
        let nBoiling = fahrenheit2celsius (212);
        expect (nBoiling).toBe(100);
    });
    it ("tests for room temperature", function (){
        let nRoom = fahrenheit2celsius (70);
        expect (nRoom).toBeCloseTo(21.11111111111111);
    });
});

