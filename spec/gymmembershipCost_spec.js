import { gymmembershipCost } from "../src/gymmembershipCost.js";

describe ("testing gym membership cost discounts", function (){

    it ("test cost with 1 friend (5% discount)", function(){
        let total = gymmembershipCost (100, 1);
        expect (total).toBe(95);
    });

    it ("tests cost with 2 friends (10% discount)", function (){
        let total = gymmembershipCost (100,2);
        expect (total).toBe(90);
    })
    it ("tests cost with 3 friends (15% discount)", function(){
        let total = gymmembershipCost (100, 3);
        expect (total).toBe(85);
    })
    it ("tests cost with 4 friends (15% discount)", function(){
        let total = gymmembershipCost (100, 4);
        expect (total).toBe(85);
    })
})
