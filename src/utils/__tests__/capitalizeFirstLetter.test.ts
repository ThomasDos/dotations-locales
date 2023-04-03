import capitalizeFirstLetter from "utils/capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
    it("should capitalize the first letter of a sentence", () => {
        expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
        expect(capitalizeFirstLetter("hello-world")).toBe("Hello-world");
        expect(capitalizeFirstLetter("hello world!")).toBe("Hello world!");
        expect(capitalizeFirstLetter("hello-world!")).toBe("Hello-world!");
    });
});
