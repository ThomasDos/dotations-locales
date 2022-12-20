import formatNumberWithSpace from "../formatNumberWithSpace";

describe("formatNumberWithSpace(numberToFormat: number)", () => {
    it("should return a number formatted with space every three digits", () => {
        const numberToFormat = 123456789;

        expect(formatNumberWithSpace(numberToFormat)).toEqual("123 456 789");
    });
});
