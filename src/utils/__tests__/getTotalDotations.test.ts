import getTotalDotations from "utils/getTotalDotations";
import dotationsMocked from "__fixtures__/dotationsMocked";

describe("getTotalDotations(dotations: Dotations, year: string)", () => {
    it("should return the amount of the total of all dotations", () => {
        const year = "2022";

        const result = getTotalDotations(dotationsMocked, year);

        const expectedResult = 354347;

        expect(result).toBe(expectedResult);
    });
});
