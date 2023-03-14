/**
 * Format a number to a string with space every 3 digits
 * ex: 123456789 to be "123 456 789"
 * @parameters : number
 * @returns : string
 */

export default (numberToFormat: number): string => {
    const numberRounded =
        numberToFormat > 10
            ? Math.round(numberToFormat)
            : numberToFormat.toFixed(2);
    const formatted = String(numberRounded).replace(/(.)(?=(\d{3})+$)/g, "$1 ");

    return formatted;
};
