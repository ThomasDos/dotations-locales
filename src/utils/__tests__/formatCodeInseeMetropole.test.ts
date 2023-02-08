import formatCodeMetropole from "utils/formatCodeMetropole";

describe("formatCodeMetropole(code:string)", () => {
    it("should return 75056", () => {
        expect(formatCodeMetropole("75101")).toBe("75056");
        expect(formatCodeMetropole("75141")).toBe("75056");
        expect(formatCodeMetropole("75147")).toBe("75056");
    });
    it("should return 69123", () => {
        expect(formatCodeMetropole("69383")).toBe("69123");
        expect(formatCodeMetropole("69384")).toBe("69123");
        expect(formatCodeMetropole("69385")).toBe("69123");
    });
    it("should return 13055", () => {
        expect(formatCodeMetropole("13244")).toBe("13055");
        expect(formatCodeMetropole("13223")).toBe("13055");
        expect(formatCodeMetropole("13245")).toBe("13055");
    });
    it("should return the code", () => {
        expect(formatCodeMetropole("13034")).toBe("13034");
        expect(formatCodeMetropole("75374")).toBe("75374");
        expect(formatCodeMetropole("93100")).toBe("93100");
    });
});
