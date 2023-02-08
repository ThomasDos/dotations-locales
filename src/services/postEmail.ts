import apiDotations from "./apiDotations";

export default (email: string, code: string, entity: string) =>
    apiDotations.post("/alerte/", { email, code, entity });
