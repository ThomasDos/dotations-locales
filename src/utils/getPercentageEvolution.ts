export default (
    currentValue: number | string | null,
    previousValue: number | string | null
): number | null => {
    if (!currentValue || !previousValue) return null;
    currentValue = Number(currentValue);
    previousValue = Number(previousValue);
    return Number(((currentValue / previousValue - 1) * 100).toFixed(2));
};
