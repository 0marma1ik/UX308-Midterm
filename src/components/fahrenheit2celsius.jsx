import { fahrenheit2celsius } from "../fahrenheit2celsius.js";
import {Text} from "react-native";

// input: F (Fahrenheit)
export function Fahrenheit2celsius ({ f }) {
    return (
        <Text>
        {f} F is {fahrenheit2celsius(f)}
        </Text> 
    );
}