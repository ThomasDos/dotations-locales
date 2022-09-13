import formatCodeInseeMetropole from "utils/formatCodeInseeMetropole";

describe("formatCodeInseeMetropole(codeInsee:string)", () => {
    it("should return 75056", () => {
        expect(formatCodeInseeMetropole("75001")).toBe("75056");
        expect(formatCodeInseeMetropole("75541")).toBe("75056");
        expect(formatCodeInseeMetropole("75147")).toBe("75056");
    });
    it("should return 69123", () => {
        expect(formatCodeInseeMetropole("69014")).toBe("69123");
        expect(formatCodeInseeMetropole("69424")).toBe("69123");
        expect(formatCodeInseeMetropole("69474")).toBe("69123");
    });
    it("should return 13055", () => {
        expect(formatCodeInseeMetropole("13044")).toBe("13055");
        expect(formatCodeInseeMetropole("13123")).toBe("13055");
        expect(formatCodeInseeMetropole("13945")).toBe("13055");
    });
    it("should return the codeInsee", () => {
        expect(formatCodeInseeMetropole("29034")).toBe("29034");
        expect(formatCodeInseeMetropole("12374")).toBe("12374");
        expect(formatCodeInseeMetropole("93100")).toBe("93100");
    });
});
