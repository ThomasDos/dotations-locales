/**
 * Format a number to a string with space every 3 digits
 * ex: 123456789 to be "123 456 789"
 * @parameters : number
 * @returns : string
 */

export default (numberToFormat: number): string => {
    const formatted = String(Math.round(numberToFormat)).replace(
        /(.)(?=(\d{3})+$)/g,
        "$1 "
    );

    return formatted;
};
