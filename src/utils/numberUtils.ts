export function countDecimals (number: number) {
    if(Math.floor(number.valueOf()) === number.valueOf()) return 0;
    return number.toString().split(".")[1].length || 0; 
}