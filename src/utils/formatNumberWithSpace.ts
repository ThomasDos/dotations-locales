/**
 * Format a number to a string with space every 3 digits
 * ex: 123456789 to be "123 456 789"
 * @parameters : number
 * @returns : string
 */

function formatNumberWithSpace(numberToFormat: number): string {
    const numberRounded = () => {
        if (!numberToFormat) {
            return numberToFormat;
        }

        const numberHasDecimal = numberToFormat % 1 !== 0;
        const numberIsSmallNumber = numberToFormat < 100;

        return numberIsSmallNumber && numberHasDecimal
            ? numberToFormat.toFixed(2)
            : Math.round(numberToFormat);
    };

    const formatted = String(numberRounded()).replace(
        /(.)(?=(\d{3})+$)/g,
        "$1 "
    );

    return formatted;
}

export default formatNumberWithSpace;
