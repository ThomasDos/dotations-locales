import capitalizeEveryFirstLetter from "utils/capitalizeEveryFirstLetter";

describe("capitalizeEveryFirstLetter", () => {
    it("should capitalize every first letter of a sentence", () => {
        expect(capitalizeEveryFirstLetter("hello world")).toBe("Hello World");
        expect(capitalizeEveryFirstLetter("hello-world")).toBe("Hello-World");
        expect(capitalizeEveryFirstLetter("hello world!")).toBe("Hello World!");
        expect(capitalizeEveryFirstLetter("hello-world!")).toBe("Hello-World!");
    });

    it("should capitalize every first letter of a sentence with a dash", () => {
        expect(capitalizeEveryFirstLetter("hello-world")).toBe("Hello-World");
        expect(capitalizeEveryFirstLetter("hello-world!")).toBe("Hello-World!");
    });

    it("should capitalize every first letter of a sentence with a space", () => {
        expect(capitalizeEveryFirstLetter("hello world")).toBe("Hello World");
        expect(capitalizeEveryFirstLetter("hello world!")).toBe("Hello World!");
    });

    it("should capitalize every first letter of a sentence with a space and a dash", () => {
        expect(capitalizeEveryFirstLetter("hello world! hello-world!")).toBe(
            "Hello World! Hello-World!"
        );
    });
});
