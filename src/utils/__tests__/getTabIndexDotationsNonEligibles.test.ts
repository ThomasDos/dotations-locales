import getTabIndexDotationsNonEligibles from "utils/getTabIndexDotationsNonEligibles";
import dotationsMocked from "__fixtures__/dotationsMocked";

describe("getTabIndexDotationsNonEligibles(dotations: Dotations, currentYear: string)", () => {
    it("should return an array with the index of the 'non eligibles dotations'", () => {
        const currentYear = "2022";

        const result = getTabIndexDotationsNonEligibles(
            dotationsMocked,
            currentYear
        );
        const expectedResult = [3, 5];

        expect(result).toEqual(expectedResult);
    });
});
