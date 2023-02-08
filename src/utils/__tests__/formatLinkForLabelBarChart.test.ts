import formatLinkForLabelBarChart from "utils/formatLinkForLabelBarChart";

describe("formatLinkForLabelBarChart(text:string)", () => {
    it("should return a formatted string for link from text with libelle and code insee", () => {
        const textEntityToFormat = "Montreuil (93100)";
        const result = formatLinkForLabelBarChart(textEntityToFormat);
        const expectedResult = "/93100?libelle=Montreuil";

        expect(result).toBe(expectedResult);
    });
});
