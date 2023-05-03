import { fetchInitSerializer } from "models/init/init.serializer";
import apiDotations from "./apiDotations";

const fetchInit = () =>
    apiDotations.get("/init/").then(({ data }) => fetchInitSerializer(data));

export default fetchInit;
