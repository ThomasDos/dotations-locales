import capitalizeSentenceWithSpace from "utils/capitalizeSentenceWithSpace";

describe("capitalizeSentenceWithSpace", () => {
    it("should capitalize every first letter of a sentence with a space", () => {
        expect(capitalizeSentenceWithSpace("hello world")).toBe("Hello World");
        expect(capitalizeSentenceWithSpace("hello world!")).toBe(
            "Hello World!"
        );
    });
});
