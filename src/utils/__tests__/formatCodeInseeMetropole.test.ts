import formatCodeInseeMetropole from "utils/formatCodeInseeMetropole";

describe("formatCodeInseeMetropole(codeInsee:string)", () => {
    it("should return 75056", () => {
        expect(formatCodeInseeMetropole("75101")).toBe("75056");
        expect(formatCodeInseeMetropole("75141")).toBe("75056");
        expect(formatCodeInseeMetropole("75147")).toBe("75056");
    });
    it("should return 69123", () => {
        expect(formatCodeInseeMetropole("69383")).toBe("69123");
        expect(formatCodeInseeMetropole("69384")).toBe("69123");
        expect(formatCodeInseeMetropole("69385")).toBe("69123");
    });
    it("should return 13055", () => {
        expect(formatCodeInseeMetropole("13244")).toBe("13055");
        expect(formatCodeInseeMetropole("13223")).toBe("13055");
        expect(formatCodeInseeMetropole("13245")).toBe("13055");
    });
    it("should return the codeInsee", () => {
        expect(formatCodeInseeMetropole("13034")).toBe("13034");
        expect(formatCodeInseeMetropole("75374")).toBe("75374");
        expect(formatCodeInseeMetropole("93100")).toBe("93100");
    });
});
