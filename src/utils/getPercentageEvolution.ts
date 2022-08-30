export default (currentValue: number, previousValue: number): number => {
    return Number(((currentValue / previousValue - 1) * 100).toFixed(2));
};
