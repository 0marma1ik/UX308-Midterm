import { gymmembershipCost } from "../gymmembershipCost.js";
import {Text} from "react-native";

// props: cost, friends
export function GymmembershipCost ({cost, friends}){
    return (
        <Text>
            Membership cost after discount: ${gymmembershipCost(cost, friends).toFixed(2)}
        </Text>
    );
}