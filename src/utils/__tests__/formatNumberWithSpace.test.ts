import formatNumberWithSpace from "../formatNumberWithSpace";

describe("formatNumberWithSpace(numberToFormat: number)", () => {
    it("should return a number formatted with space every three digits", () => {
        const numberToFormat = 123456789;

        expect(formatNumberWithSpace(numberToFormat)).toEqual("123 456 789");
    });
    it("should return 0 if numberToFormat is 0", () => {
        const numberToFormat = 0;

        expect(formatNumberWithSpace(numberToFormat)).toEqual("0");
    });

    it("should return a number with 2 decimals if numberToFormat is a small number with decimals", () => {
        const numberToFormat = 12.345;

        expect(formatNumberWithSpace(numberToFormat)).toEqual("12.35");
    });
});
