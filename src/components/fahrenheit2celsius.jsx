import { fahrenheit2Celsius } from "../fahrenheit2celsius.js";
import {text} from "react-native";

// input: F (Fahrenheit)
export function Fahrenheit2celsius ({ f }) {
    return (
        <text>
        {f} F is {fahrenheit2celsius}
        </text> 
    );
}