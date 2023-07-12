import { entitiesComparerSerializer } from "models/comparer/comparer.serializer";
import apiDotations from "./apiDotations";

export default async (code: string) =>
    apiDotations
        .post("/comparaison/", {
            code,
        })
        .then(res => entitiesComparerSerializer(res.data));
