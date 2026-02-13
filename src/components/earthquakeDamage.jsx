import { earthquakeDamage } from "../earthquakeDamage.js";
import{Text} from "react-native";

// prop: intensity (Richter number)
export function EarthquakeDamage({intensity}) {
    return(
        <Text>
            an earthquake of intensity {intensity} causes: {earthquakeDamage(intensity)}
        </Text>
    );
}