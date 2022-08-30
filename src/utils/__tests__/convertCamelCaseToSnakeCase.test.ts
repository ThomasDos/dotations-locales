import convertCamelCaseToSnakeCase from "../convertCamelCaseToSnakeCase";

describe("convertCamelCaseToSnakeCase", () => {
    it("should return a string formatted in snake case", () => {
        const stringToFormatOne = "camelCaseExpected";
        const expectedResultOne = "camel_case_expected";

        expect(convertCamelCaseToSnakeCase(stringToFormatOne)).toEqual(
            expectedResultOne
        );

        const stringToFormatTwo = "secondCamelCaseExpected";
        const expectedResultTwo = "second_camel_case_expected";

        expect(convertCamelCaseToSnakeCase(stringToFormatTwo)).toEqual(
            expectedResultTwo
        );
    });
});
