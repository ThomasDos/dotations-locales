import formatLinkForLabelBarChart from "utils/formatLinkForLabelBarChart";

describe("formatLinkForLabelBarChart(text:string)", () => {
    it("should return a formatted string for link from text with commune and code insee", () => {
        const textCommuneToFormat = "Montreuil (93100)";
        const result = formatLinkForLabelBarChart(textCommuneToFormat);
        const expectedResult = "/93100?commune=Montreuil";

        expect(result).toBe(expectedResult);
    });
});
