export function coinTotal(nickels, dimes, quarters, loonies, toonies){
    const nickel_value = 0.05;
    const dime_value = 0.10;
    const quarter_value = 0.25;
    const loonie_value = 1.00;
    const toonie_value = 2.00;

    return (
        nickel_value * nickels + dime_value * dimes + quarter_value * quarters + loonie_value * loonies + toonie_value * toonies
    )
}