import { cubeVolume } from "../cubeVolume.js";
import {Text} from "react-native";

// input: height (meters)

export function CubeVolume({height}){
    return (
        <Text>
            A cube with height {height}m has volume {cubeVolume(height)}m cubed
        </Text>
    );
}