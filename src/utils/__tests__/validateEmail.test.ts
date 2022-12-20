import validateEmail from "utils/isValidEmail";

describe("validateEmail(email:string)", () => {
    it("should return true with a correct email", () => {
        expect(validateEmail("test@email.com")).toBeTruthy();
        expect(validateEmail("second@email.com")).toBeTruthy();
    });

    it("should return false with an incorrect email", () => {
        expect(validateEmail("test@emailcom")).toBeFalsy();
        expect(validateEmail("testemail.com")).toBeFalsy();
        expect(validateEmail("t@email..com")).toBeFalsy();
        expect(validateEmail("t@@email.com")).toBeFalsy();
    });
});
