import React from "react";
import { coinTotal } from "../coinTotal";

export default function coinTotal({
    nickels = 0,
    dimes = 0,
    quarters = 0,
    loonies = 0,
    toonies = 0
}) {

    const total = cointTotal (nickels, dimes, quarters, loonies, toonies);

}