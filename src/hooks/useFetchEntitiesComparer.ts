import { useQuery } from "@tanstack/react-query";
import fetchEntitiesComparer from "services/fetchEntitiesComparer";

export default (code: string, enabled: boolean) =>
    useQuery(
        ["fetchEntitiesComparer", code],
        async () => fetchEntitiesComparer(code),
        {
            enabled,
        }
    );
