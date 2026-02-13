import { earthquakeDamage } from "../src/earthquakeDamage.js";

describe("testing earthquake damage classification", function(){

    it("tests little or no damage (<5)", function(){
        expect(earthquakeDamage(4.5)).toBe("little or no damage");
    });

    it("tests some damage (5 <= n < 5.5)", function(){
        expect(earthquakeDamage(5.2)).toBe("some damage");
    });

    it("tests serious damage (5.5 <= n < 6.5)", function(){
        expect(earthquakeDamage(6.0))
            .toBe("serious damage: walls may crack or fall");
    });

    it("tests catastrophe (>= 7.5)", function(){
        expect(earthquakeDamage(8.0))
            .toBe("Catastrophe: most buildings destroyed");
    });

});
