import convertCamelCaseToSnakeCase from "../convertCamelCaseToSnakeCase";

describe("convertCamelCaseToSnakeCase(str: string)", () => {
    it("should return a string formatted in snake case", () => {
        const stringToFormatOne = "camelCaseExpected";
        const expectedResultOne = "camel_case_expected";

        const firstResult = convertCamelCaseToSnakeCase(stringToFormatOne);

        expect(firstResult).toBe(expectedResultOne);

        const stringToFormatTwo = "secondCamelCaseExpected";
        const expectedResultTwo = "second_camel_case_expected";

        const secondResult = convertCamelCaseToSnakeCase(stringToFormatTwo);

        expect(secondResult).toBe(expectedResultTwo);

        const stringToFormatThree = "ThirdStrInGToForMat";
        const expectedResultThree = "third_str_in_g_to_for_mat";

        const thirdResult = convertCamelCaseToSnakeCase(stringToFormatThree);

        expect(thirdResult).toBe(expectedResultThree);
    });
});
