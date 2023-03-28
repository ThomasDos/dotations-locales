import stringToBoolean from "utils/stringToBoolean";

describe("stringToBoolean(str:string)", () => {
    it("should return true", () => {
        expect(stringToBoolean("true")).toBeTruthy();
        expect(stringToBoolean("tRuE")).toBeTruthy();
        expect(stringToBoolean("TRUE")).toBeTruthy();
    });

    it("should return false with an incorrect or false string", () => {
        expect(stringToBoolean("falsy")).toBeFalsy();
        expect(stringToBoolean("random")).toBeFalsy();
        expect(stringToBoolean("")).toBeFalsy();
        expect(stringToBoolean(undefined)).toBeFalsy();
    });
});
