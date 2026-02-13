// input: intensity (Richter scale number)
// output: damage description (string)

export function earthquakeDamage(intensity) {
    if (intensity < 5) {
        return "little or no damage";
    } else if (intensity < 5.5){
        return "some damage"
    } else if (intensity < 6.5){
        return "serious damage: walls may crack or fall"
    } else {
        return "Catastrophe: most buildings destroyed";
    }
}