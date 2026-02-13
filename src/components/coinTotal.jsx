import { coinTotal } from "../coinTotal";
import {Text} from "react-native"

export function CoinTotal({
    nickels = 0,
    dimes = 0,
    quarters = 0,
    loonies = 0,
    toonies = 0
}) {

    const total = coinTotal (nickels, dimes, quarters, loonies, toonies);

    return(
         <Text>
            Coin total returned {total}
        </Text>
    )

}