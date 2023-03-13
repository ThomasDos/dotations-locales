import { Entity } from "models/entity/entity.interface";
import { useQuery } from "react-query";
import fetchDepartement from "services/fetchDepartement";

export default (code: string, enabled: boolean) =>
    useQuery<Entity>(
        ["fetchDepartement", code],
        async () => fetchDepartement(code),
        {
            enabled,
        }
    );
