export function getDecimals (number: number): number {
    if(Math.floor(number.valueOf()) === number.valueOf()) return 0;
    return Number(number.toString().split(".")[1]) || 0; 
}