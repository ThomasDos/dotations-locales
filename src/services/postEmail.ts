import apiDotations from "./apiDotations";

export default (email: string, code_insee: string, commune: string) =>
    apiDotations.post("/alerte/", { email, code_insee, commune });
