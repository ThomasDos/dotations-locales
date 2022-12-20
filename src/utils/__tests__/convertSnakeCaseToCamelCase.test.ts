import convertSnakeCaseToCamelCase from "../convertSnakeCaseToCamelCase";

describe("convertSnakeCaseToCamelCase(str: string)", () => {
    it("should return a string formatted in camel case", () => {
        const stringToFormatOne = "TO_CAMEL";
        const stringToFormatTwo = "to_camel";
        const stringToFormatThree = "TO-CAMEL";
        const stringToFormatFour = "to-camel";

        const expectedResult = "toCamel";

        expect(convertSnakeCaseToCamelCase(stringToFormatOne)).toEqual(
            expectedResult
        );
        expect(convertSnakeCaseToCamelCase(stringToFormatTwo)).toEqual(
            expectedResult
        );
        expect(convertSnakeCaseToCamelCase(stringToFormatThree)).toEqual(
            expectedResult
        );
        expect(convertSnakeCaseToCamelCase(stringToFormatFour)).toEqual(
            expectedResult
        );
    });
});
