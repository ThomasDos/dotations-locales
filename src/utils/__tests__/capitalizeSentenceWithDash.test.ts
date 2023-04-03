import capitalizeSentenceWithDash from "utils/capitalizeSentenceWithDash";

describe("capitalizeSentenceWithDash", () => {
    it("should capitalize every first letter of a sentence with a dash", () => {
        expect(capitalizeSentenceWithDash("hello-world")).toBe("Hello-World");
        expect(capitalizeSentenceWithDash("hello-world!")).toBe("Hello-World!");
    });
});
