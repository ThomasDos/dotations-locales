import getPercentageEvolution from "utils/getPercentageEvolution";

describe("getPercentageEvolution(currentValue: number, previousValue: number)", () => {
    it("should return the correct negative evolution percentage", () => {
        const currentValue = 10;
        const previousValue = 15;

        const evolutionResult = getPercentageEvolution(
            currentValue,
            previousValue
        );

        expect(evolutionResult).toBe(-33.33);
    });

    it("should return the correct positive evolution percentage", () => {
        const currentValue = 25;
        const previousValue = 7;

        const evolutionResult = getPercentageEvolution(
            currentValue,
            previousValue
        );

        expect(evolutionResult).toBe(257.14);
    });
});
