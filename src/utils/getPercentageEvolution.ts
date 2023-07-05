export default (
    currentValue: number | string | null,
    previousValue: number | string | null
): number => {
    if (!currentValue || !previousValue) return 0;
    currentValue = Number(currentValue);
    previousValue = Number(previousValue);
    return Number(((currentValue / previousValue - 1) * 100).toFixed(2));
};
