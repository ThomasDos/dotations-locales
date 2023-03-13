import { useQuery } from "@tanstack/react-query";
import { Entity } from "models/entity/entity.interface";
import fetchDepartement from "services/fetchDepartement";

export default (code: string, enabled: boolean) =>
    useQuery<Entity>(
        ["fetchDepartement", code],
        async () => fetchDepartement(code),
        {
            enabled,
        }
    );
