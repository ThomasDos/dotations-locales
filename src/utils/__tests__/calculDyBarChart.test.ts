import calculDyBarChart from "utils/calculDyBarChart";

describe("calculDyBarChart", () => {
    it("should return the correct dy value", () => {
        expect(calculDyBarChart(1)).toBe(-18);
        expect(calculDyBarChart(2)).toBe(-36);
        expect(calculDyBarChart(3)).toBe(-39);
        expect(calculDyBarChart(4)).toBe(-48);
        expect(calculDyBarChart(5)).toBe(-40);
        expect(calculDyBarChart(6)).toBe(-48);
        expect(calculDyBarChart(7)).toBe(-42);
        expect(calculDyBarChart(8)).toBe(-48);
        expect(calculDyBarChart(9)).toBe(-45);
        expect(calculDyBarChart(10)).toBe(-50);
        expect(calculDyBarChart(11)).toBe(-44);
        expect(calculDyBarChart(12)).toBe(-48);
        expect(calculDyBarChart(13)).toBe(-45.5);
        expect(calculDyBarChart(14)).toBe(-49);
        expect(calculDyBarChart(15)).toBe(-45);
        expect(calculDyBarChart(16)).toBe(-48);
        expect(calculDyBarChart(17)).toBe(-51);
        expect(calculDyBarChart(18)).toBe(-54);
        expect(calculDyBarChart(19)).toBe(-38);
        expect(calculDyBarChart(20)).toBe(-40);
        expect(calculDyBarChart(21)).toBe(-42);
        expect(calculDyBarChart(22)).toBe(-44);
    });
});
