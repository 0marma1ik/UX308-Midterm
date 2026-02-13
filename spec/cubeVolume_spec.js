import { cubeVolume } from "../src/cubeVolume.js";

describe ("testing cube volume", function (){
    it ("tests cube volume for height 1m", function(){
        let vol = cubeVolume(1);
        expect (vol).toBe(1);
    });

    it ("tests cube volume for height 2m", function (){
        let vol = cubeVolume(2)
        expect (vol).toBe(8)
    });

    it ("tests cube volume for height 3m", function (){
        let vol = cubeVolume(3)
        expect (vol).toBe(27)
    });
});