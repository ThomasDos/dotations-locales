import dotationsMocked from "__fixtures__/dotationsMocked";
import getTotalDotations from "utils/getTotalDotations";

describe("getTotalDotations(dotations: Dotations, year: string)", () => {
    it("should return the amount of the total of all dotations", () => {
        const year = "2022";

        const result = getTotalDotations(dotationsMocked, year);

        const expectedResult = 354347;

        expect(result).toBe(expectedResult);
    });

    it("should return if label is DPEL or DPB", () => {
        const year = "2022";

        const result = getTotalDotations(
            {
                ...dotationsMocked,
                dotationForfaitaire: {
                    ...dotationsMocked.dotationForfaitaire,
                    label: "DPEL",
                },
            },
            year
        );

        const expectedResult = 90671;

        expect(result).toBe(expectedResult);
    });
});
